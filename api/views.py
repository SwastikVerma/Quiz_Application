from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.hashers import make_password,check_password
# from django.contrib.auth import logout

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
import pymongo
# Create your views here.
import json

from httplib2 import Response

from api.models import Question
from api.serializers import QuestionSerializer

# rendering pages on routes
def index(request):
    return render(request,'index.html')

def login(request):
    return render(request,'loginpage.html')

def signup(request):
    return render(request,'signuppage.html')

def result(request):
    return render(request,'result.html')


session=[]

def create_acc(request):
    if request.method =='POST' :
        username = request.POST['username']
        password = request.POST['password']

        client = pymongo.MongoClient('mongodb://localhost:27017')
        db = client['quiz_app']
        hashed_password = make_password(password)

        existing_user = db.users.find_one({'username': username})
        if existing_user:
            messages.success(request,'Username already exists. Please login')
            return render(request, 'signuppage.html')
        user = {
            'username': username,
            'password': hashed_password,
        }
        request.session['username'] = username
        db.users.insert_one(user)

        messages.success(request,'User created successfully!')
        return render(request,'index.html')
    
    else:
        return HttpResponseRedirect('signup')
    

    
    

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        client = pymongo.MongoClient('mongodb://localhost:27017')
        db = client['quiz_app']
        
        try:

            user = db.users.find_one({'username': username})

            if user: 
                # Retrieve the stored hashed password from the user document
                stored_password = user['password']
                # Hash the input password using the same salt as the stored password
                if check_password(password , stored_password):
                    request.session['username'] = username
                    messages.success(request,"Correct Password") 
                    return render(request,'index.html')  # Passwords match, user is authenticated
                else:
                    messages.success(request,"Incorrect Password or User does not exist")  # Passwords do not match
                    return HttpResponseRedirect('login')
        except Exception as e:
            messages.error(request, str(e))
        return HttpResponseRedirect('login')

    else:
        return render(request, 'loginpage.html')

def logout(request):
    if 'username' in request.session:
        del request.session['username']

    messages.success(request, "You Have Been Logged Out...")
    return render(request,'index.html')




from django.contrib.sessions.models import Session

def question(request):
    """Render the question page."""
    
    print("In Question")

    # Render the question page
    return render(request, 'question.html')






from django.http import HttpRequest





