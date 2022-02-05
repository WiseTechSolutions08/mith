from django.contrib import admin
from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.contactsList, name='contacts'),
    path('detail/<str:pk>', views.contactDetail, name='detail'),
    path('create', views.contactCreate, name='create'),
    path('update/<str:pk>', views.contactUpdate, name='update'),
    path('delete/<str:pk>', views.contactDelete, name='delete'),
]
