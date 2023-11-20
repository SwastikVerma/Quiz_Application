from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from pymongo import MongoClient

from api.models import Question
from rest_framework.decorators import api_view


# Question serializer
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['question', 'exp', 'cop', 'opa', 'opb', 'opc', 'opd', 'subject_name', 'topic_name']


# API view to retrieve questions
# class QuestionAPIView(APIView):
#     def get(self, request, format=None):
#         subject_name = request.query_params.get('subject_name')

#         # If subject name is "Miscellaneous", retrieve 20 random questions without filtering
#         if subject_name == "Miscellaneous":
#             questions = collection.aggregate([
#                 {'$sample': {'size': 20}}
#             ])

#         # Otherwise, filter questions based on subject name and use $sample to get 20 random questions
#         else:
#             questions = collection.aggregate([
#                 {'$match': {'subject_name': subject_name}},
#                 {'$sample': {'size': 20}}
#             ])

#         # Convert questions to list of dictionaries
#         question_list = []
#         for question in questions:
#             question_dict = {'_id': question['_id'], 'question': question['question'], 'exp': question['exp'],
#                              'cop': question['cop'], 'opa': question['opa'], 'opb': question['opb'],
#                              'opc': question['opc'], 'opd': question['opd'], 'subject_name': question['subject_name'],
#                              'topic_name': question['topic_name'], 'choice_type': question['choice_type']}
#             question_list.append(question_dict)

#         # Serialize the list of questions
#         serializer = QuestionSerializer(question_list, many=True)

#         # Return JSON response
#         return Response(serializer.data)

# API view to retrieve questions
@api_view(['GET'])
def start_quiz(request):
    # Database connection
    client = MongoClient('mongodb://localhost:27017/')
    db = client['quiz_app']
    collection = db['questions']
    print(request.GET)
    subject_name = request.GET.get('subject_name')
    print(subject_name)
    # Filter questions based on subject name and use $sample to get 20 random questions
    questions = collection.aggregate([
        {'$match': {'subject_name': subject_name}},
        {'$sample': {'size': 20}}
    ])

    # Convert questions to list of dictionaries
    question_list = []
    for question in questions:
        question_dict = {'_id': str(question['_id']), 'question': question['question'], 'exp': question['exp'],
                         'cop': question['cop'], 'opa': question['opa'], 'opb': question['opb'],
                         'opc': question['opc'], 'opd': question['opd'], 'subject_name': question['subject_name'],
                         'topic_name': question['topic_name']}
        question_list.append(question_dict)

    # Serialize the list of questions
    serializer = QuestionSerializer(question_list, many=True)
    print(question_list)
    # Return JSON response
    return Response(serializer.data)

