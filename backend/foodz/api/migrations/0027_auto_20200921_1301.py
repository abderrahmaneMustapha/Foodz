# Generated by Django 3.0.8 on 2020-09-21 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0026_auto_20200919_1259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurantcomments',
            name='review',
            field=models.FloatField(null=True, verbose_name='resturant review'),
        ),
    ]
