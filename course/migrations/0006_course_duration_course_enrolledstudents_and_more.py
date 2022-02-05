# Generated by Django 4.0.1 on 2022-01-28 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0005_remove_course_subtopics'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='duration',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='course',
            name='enrolledStudents',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='course',
            name='instructor',
            field=models.CharField(default='-', max_length=50),
        ),
        migrations.AddField(
            model_name='course',
            name='language',
            field=models.CharField(default='English', max_length=10),
        ),
        migrations.AddField(
            model_name='course',
            name='sections',
            field=models.IntegerField(default=0),
        ),
    ]
