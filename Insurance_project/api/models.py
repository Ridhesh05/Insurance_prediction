from django.db import models

class Insurance(models.Model):
    MALE = 1
    FEMALE = 0
    SEX_CHOICES = [
        (MALE, 'Male'),
        (FEMALE, 'Female')
    ]
    
    SOUTHEAST = 0
    SOUTHWEST = 1
    NORTHWEST = 2
    NORTHEAST = 3
    REGION_CHOICES = [
        (SOUTHEAST, 'SouthEAST'),
        (SOUTHWEST, 'SouthWEST'),
        (NORTHWEST, 'NorthWEST'),
        (NORTHEAST, 'NorthEast'),
    ]
    
    age = models.FloatField()
    sex = models.IntegerField(choices=SEX_CHOICES)
    bmi = models.FloatField()
    children = models.IntegerField()
    smoker = models.IntegerField(choices=((0, "Smoker"), (1, "Non Smoker")))
    region = models.IntegerField(choices=REGION_CHOICES)
