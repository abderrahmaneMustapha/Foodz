# Generated by Django 3.0.8 on 2020-09-07 05:54

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20200907_0558'),
    ]

    operations = [
        migrations.CreateModel(
            name='RestaurantService',
            fields=[
                ('choice', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('created_at', models.DateTimeField(null=True, verbose_name='Restaurant service created at')),
                ('updated_at', models.DateTimeField(null=True, verbose_name='Restaurant service updated at')),
            ],
            options={
                'verbose_name': 'Restaurant service',
                'verbose_name_plural': 'Restaurants services',
            },
        ),
        migrations.CreateModel(
            name='RestaurantType',
            fields=[
                ('choice', models.CharField(max_length=125, primary_key=True, serialize=False, unique=True)),
                ('created_at', models.DateTimeField(null=True, verbose_name='Restaurant type created at')),
                ('updated_at', models.DateTimeField(null=True, verbose_name='Restaurant type updated at')),
            ],
            options={
                'verbose_name': 'Restaurant type',
                'verbose_name_plural': 'Restaurants types',
            },
        ),
        migrations.AddField(
            model_name='restaurant',
            name='slug',
            field=models.SlugField(max_length=500, null=True, verbose_name='Restaurant slug'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='restaurant_type',
            field=models.CharField(max_length=250, null=True, verbose_name=api.models.RestaurantType),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='services',
            field=models.ManyToManyField(to='api.RestaurantService', verbose_name='Restraurant services'),
        ),
    ]
