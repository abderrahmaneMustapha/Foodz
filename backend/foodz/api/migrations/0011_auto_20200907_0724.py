# Generated by Django 3.0.8 on 2020-09-07 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20200907_0702'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Comment created at'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Comment updated at'),
        ),
        migrations.AlterField(
            model_name='food',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Calendar created at'),
        ),
        migrations.AlterField(
            model_name='food',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Clendar updated at'),
        ),
        migrations.AlterField(
            model_name='locations',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Location created at'),
        ),
        migrations.AlterField(
            model_name='locations',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Location updated at'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Restaurant created at'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Restaurant updated at'),
        ),
        migrations.AlterField(
            model_name='restaurantcalendar',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Calendar created at'),
        ),
        migrations.AlterField(
            model_name='restaurantcalendar',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, verbose_name='Clendar updated at'),
        ),
        migrations.AlterField(
            model_name='restaurantpromotion',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Restaurant promotion created at'),
        ),
        migrations.AlterField(
            model_name='restaurantpromotion',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Restaurant promotion updated at'),
        ),
        migrations.AlterField(
            model_name='restaurantservice',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Restaurant service created at'),
        ),
        migrations.AlterField(
            model_name='restaurantservice',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Restaurant service updated at'),
        ),
        migrations.AlterField(
            model_name='restauranttype',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Restaurant type created at'),
        ),
        migrations.AlterField(
            model_name='restauranttype',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Restaurant type updated at'),
        ),
        migrations.AlterField(
            model_name='restraurantcomments',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Comment created at'),
        ),
        migrations.AlterField(
            model_name='restraurantcomments',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Comment updated at'),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Location created at'),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Location updated at'),
        ),
    ]
