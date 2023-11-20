from django.urls import path
from .views import *
from .serializers import start_quiz

urlpatterns = [
    path('', index, name='index'),
    path('login',login,name='login'),
    path('signup', signup, name='signup'),
    path('create_acc',create_acc,name='create_acc'),
    path('signin',signin,name='signin'),
    path('logout',logout,name='logout'),
    path('start_quiz/',start_quiz,name='start_quiz'),
    path('question',question,name='question'),
    path('result',result,name='result'),

]