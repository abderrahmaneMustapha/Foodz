# Generated by Django 3.0.8 on 2020-09-05 10:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200904_1115'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(null=True, verbose_name='Comment text')),
                ('created_at', models.DateTimeField(null=True, verbose_name='Comment created at')),
                ('updated_at', models.DateTimeField(null=True, verbose_name='Comment updated at')),
                ('replys', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='comment_replys', to='api.Comment', verbose_name='Comment replys')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='User who comment')),
            ],
            options={
                'verbose_name': 'Comment',
                'verbose_name_plural': 'Comments',
            },
        ),
        migrations.CreateModel(
            name='RestraurantComments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(null=True, verbose_name='Comment created at')),
                ('updated_at', models.DateTimeField(null=True, verbose_name='Comment updated at')),
                ('comment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Comment', verbose_name='Comment text')),
                ('restaurant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Restaurant', verbose_name='Comment about this restaurant')),
            ],
            options={
                'verbose_name': 'Comment',
                'verbose_name_plural': 'Comments',
            },
        ),
        migrations.CreateModel(
            name='RestaurantPromotion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Restraurant promotion title')),
                ('text', models.TextField(null=True, verbose_name='Promotion description')),
                ('created_at', models.DateTimeField(null=True, verbose_name='Restaurant promotion created at')),
                ('updated_at', models.DateTimeField(null=True, verbose_name='Restaurant promotion updated at')),
                ('restaurant', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Restaurant', verbose_name='promoted restaurant')),
            ],
            options={
                'verbose_name': ' Restaurant Promotion',
                'verbose_name_plural': ' Restaurants Promotions ',
            },
        ),
    ]
