# Generated by Django 4.0.1 on 2022-01-28 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0003_course_thumbnail'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
