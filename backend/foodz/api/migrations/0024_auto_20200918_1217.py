# Generated by Django 3.0.8 on 2020-09-18 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_food_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='price',
            field=models.FloatField(null=True, verbose_name='Food price'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='website',
            field=models.URLField(blank=True, max_length=300, null=True),
        ),
    ]
