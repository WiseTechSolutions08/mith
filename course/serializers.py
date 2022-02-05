from rest_framework import serializers
from .models import Course, SubTopic


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class SubTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTopic
        fields = '__all__'

class SubTopicsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubTopic
        fields = ['id', 'topic', 'orderno', 'about']
