from django.db import models


class Question(models.Model):
    _id = models.AutoField(primary_key=True)
    question = models.CharField(max_length=255)
    exp = models.CharField(max_length=255)
    cop = models.IntegerField()
    opa = models.CharField(max_length=255)
    opb = models.CharField(max_length=255)
    opc = models.CharField(max_length=255)
    opd = models.CharField(max_length=255)
    subject_name = models.CharField(max_length=255)
    topic_name = models.CharField(max_length=255)
    choice_type = models.CharField(max_length=255)
