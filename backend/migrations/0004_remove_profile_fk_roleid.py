# Generated by Django 2.2.4 on 2019-11-10 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_auto_20191110_1536'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='fk_roleid',
        ),
    ]
