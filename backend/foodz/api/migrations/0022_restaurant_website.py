# Generated by Django 3.0.8 on 2020-09-18 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_auto_20200914_1130'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurant',
            name='website',
            field=models.URLField(max_length=300, null=True),
        ),
    ]
