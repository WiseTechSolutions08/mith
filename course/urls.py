from django.contrib import admin
from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.coursesList, name='courses'),
    path('detail/<str:pk>', views.courseDetail, name='detail'),

    path('topics', views.subTopicsList, name='courses'),
    path('topics/<str:courseId>', views.courseTopics, name='detail'),

]
