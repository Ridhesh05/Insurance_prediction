# Generated by Django 5.0.4 on 2024-04-18 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='insurance',
            name='sex',
            field=models.IntegerField(choices=[(1, 'Male'), (0, 'Female')]),
        ),
    ]
