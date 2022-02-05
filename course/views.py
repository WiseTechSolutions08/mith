from django.shortcuts import render
from rest_framework.response import Response
from .models import Course, SubTopic
from .serializers import CourseSerializer, SubTopicSerializer, SubTopicsListSerializer
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated

# Create your views here.


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def coursesList(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def courseDetail(request, pk):
    course = Course.objects.get(id=pk)
    serializer = CourseSerializer(course, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def courseCreate(request):
    serializer = CourseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def courseUpdate(request, pk):
    course = Course.objects.get(id=pk)

    serializer = CourseSerializer(instance=course, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def courseDelete(request, pk):
    course = Course.objects.get(id=pk)
    course.delete()
    return Response('Deleted')



@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def subTopicsList(request):
    topics = SubTopic.objects.all()
    serializer = SubTopicSerializer(topics, many=True)
    return Response(serializer.data)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def courseTopics(request, courseId):
    topics = SubTopic.objects.filter(course=courseId).values()
    serializer = SubTopicsListSerializer(topics, many=True)
    return Response(serializer.data)
