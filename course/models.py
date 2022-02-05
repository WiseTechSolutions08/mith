from django.db import models
from django.contrib.postgres.fields import ArrayField

from accounts.models import Account


# Create your models here.
class Course(models.Model):
    courseName = models.CharField(max_length=200)
    instructor  = models.CharField(max_length=50, default='-')
    price = models.IntegerField(default=0)
    orderno = models.IntegerField(unique=True)
    sections = models.IntegerField(default=0)
    enrolledStudents = models.IntegerField(default=0)
    duration = models.IntegerField(default=0)
    description = models.TextField()
    reviewRating = models.IntegerField()
    language  = models.CharField(max_length=10,default='English')
    thumbnail = models.ImageField(upload_to='courses', blank=True)
    added_date = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.courseName

    class Meta:
        ordering = ['courseName']

class SubTopic(models.Model):
    topic = models.CharField(max_length=200)
    orderno = models.IntegerField(unique=True)
    about = models.TextField()
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, default='')
    video_url = models.CharField(max_length=1000)
    added_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.topic

    class Meta:
        ordering = ['topic']

class ModelQuestion(models.Model):
    question = models.CharField(max_length=1000)
    orderno = models.IntegerField(unique=True)
    options = ArrayField(models.CharField(max_length=200), blank=True)
    answer = models.TextField()
    topic = models.ForeignKey(SubTopic, on_delete=models.CASCADE, blank=True, default='')
    added_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question

    class Meta:
        ordering = ['question']

class FAQuestion(models.Model):
    question = models.CharField(max_length=1000)
    orderno = models.IntegerField(unique=True)
    answer = models.TextField()
    topic = models.ForeignKey(SubTopic, on_delete=models.CASCADE, blank=True, default='')
    added_date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(Account, on_delete=models.CASCADE, blank=True, default='')

    def __str__(self):
        return self.question

    class Meta:
        ordering = ['question']


class Formula(models.Model):
    title = models.CharField(max_length=1000)
    formula = models.TextField(unique=True)
    orderno = models.IntegerField(default=0)
    added_date = models.DateTimeField(auto_now=True)
    # topic = models.ForeignKey(SubTopic, on_delete=models.CASCADE, blank=True, default='')
   
    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']

class CourseReview(models.Model):
    headline = models.CharField(max_length=200)
    reviewText = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, default='')
    user = models.ForeignKey(Account, on_delete=models.CASCADE, blank=True, default='')
    rating = models.IntegerField()
    added_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.headline

    class Meta:
        ordering = ['headline']