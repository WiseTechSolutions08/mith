# Generated by Django 4.0.1 on 2022-01-29 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0007_formula_course_added_date_course_orderno_subtopic_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='orderno',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='faquestion',
            name='orderno',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='formula',
            name='formula',
            field=models.TextField(unique=True),
        ),
        migrations.AlterField(
            model_name='modelquestion',
            name='orderno',
            field=models.IntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='subtopic',
            name='orderno',
            field=models.IntegerField(unique=True),
        ),
    ]
