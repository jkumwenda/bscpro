# Generated by Django 2.2.4 on 2019-10-18 17:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='board',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='department',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='employee',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='employeepositon',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='organisation',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='permission',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='positon',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='profile',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='profileorganisation',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='role',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='rolepermission',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='title',
            options={'managed': False},
        ),
    ]
