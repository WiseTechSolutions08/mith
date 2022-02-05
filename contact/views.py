from django.shortcuts import render
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactUsSerializer
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def contactsList(request):
    contacts = Contact.objects.all()
    serializer = ContactUsSerializer(contacts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def contactDetail(request, pk):
    contacts = Contact.objects.get(id=pk)
    serializer = ContactUsSerializer(contacts, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def contactCreate(request):
    serializer = ContactUsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def contactUpdate(request, pk):
    contact = Contact.objects.get(id=pk)

    serializer = ContactUsSerializer(instance=contact, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def contactDelete(request, pk):
    contact = Contact.objects.get(id=pk)
    contact.delete()
    return Response('Deleted')
