from django.db import models


# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True, default='example@mail.com')
    phoneNumber = models.CharField(unique=True, max_length=10)
    # phoneNumber = PhoneNumberField(unique=True, null=False,
    #                                blank=False)  # Here    email = models.EmailField(unique=True)
    description = models.TextField()

    def __str__(self):
        return self.name
