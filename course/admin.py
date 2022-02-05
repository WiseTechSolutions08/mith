from django.contrib import admin
from .models import Course, CourseReview, Formula, ModelQuestion, SubTopic


admin.site.register(Course)
admin.site.register(SubTopic)
admin.site.register(Formula)
admin.site.register(ModelQuestion)
admin.site.register(CourseReview)

