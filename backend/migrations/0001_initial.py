# Generated by Django 2.2.4 on 2019-10-05 15:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('pk_departmentid', models.AutoField(primary_key=True, serialize=False)),
                ('department', models.CharField(max_length=45)),
                ('department_description', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'department',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('pk_employeeid', models.AutoField(primary_key=True, serialize=False)),
                ('employee_number', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'employee',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Organisation',
            fields=[
                ('pk_organisationid', models.AutoField(primary_key=True, serialize=False)),
                ('organisation', models.CharField(max_length=45)),
                ('address_1', models.CharField(max_length=45)),
                ('address_2', models.CharField(blank=True, max_length=45, null=True)),
                ('email', models.CharField(blank=True, max_length=45, null=True)),
                ('phone', models.CharField(blank=True, max_length=45, null=True)),
                ('code', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'organisation',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Permission',
            fields=[
                ('pk_permissionid', models.AutoField(primary_key=True, serialize=False)),
                ('permission', models.CharField(max_length=45)),
                ('permission_description', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'permission',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('pk_profileid', models.AutoField(primary_key=True, serialize=False)),
                ('profile_photo', models.CharField(blank=True, max_length=45, null=True)),
                ('mobile', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'profile',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('pk_roleid', models.AutoField(primary_key=True, serialize=False)),
                ('role', models.CharField(max_length=45)),
                ('role_description', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'role',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Title',
            fields=[
                ('pk_titleid', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'title',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='RolePermission',
            fields=[
                ('pk_role_permissionid', models.AutoField(primary_key=True, serialize=False)),
                ('fk_role_permissionid', models.ForeignKey(db_column='fk_role_permissionid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Permission')),
                ('fk_roleid', models.ForeignKey(db_column='fk_roleid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Role')),
            ],
            options={
                'db_table': 'role_permission',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='ProfileOrganisation',
            fields=[
                ('pk_profile_organisationid', models.AutoField(primary_key=True, serialize=False)),
                ('fk_organisationid', models.ForeignKey(db_column='fk_organisationid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Organisation')),
                ('fk_profileid', models.ForeignKey(db_column='fk_profileid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Profile')),
            ],
            options={
                'db_table': 'profile_organisation',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='profile',
            name='fk_roleid',
            field=models.ForeignKey(db_column='fk_roleid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Role'),
        ),
        migrations.AddField(
            model_name='profile',
            name='fk_titleid',
            field=models.ForeignKey(db_column='fk_titleid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Title'),
        ),
        migrations.AddField(
            model_name='profile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Positon',
            fields=[
                ('pk_positonid', models.AutoField(primary_key=True, serialize=False)),
                ('appraiser', models.IntegerField()),
                ('positon', models.CharField(max_length=45)),
                ('position_description', models.TextField(blank=True, null=True)),
                ('fk_departmentid', models.ForeignKey(db_column='fk_departmentid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Department')),
            ],
            options={
                'db_table': 'positon',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='EmployeePositon',
            fields=[
                ('pk_employee_positonid', models.AutoField(primary_key=True, serialize=False)),
                ('date_from', models.DateField()),
                ('date_to', models.DateField(blank=True, null=True)),
                ('is_current', models.IntegerField(blank=True, null=True)),
                ('fk_employeeid', models.ForeignKey(db_column='fk_employeeid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Employee')),
                ('pk_positonid', models.ForeignKey(db_column='pk_positonid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Positon')),
            ],
            options={
                'db_table': 'employee_positon',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='employee',
            name='fk_profileid',
            field=models.ForeignKey(db_column='fk_profileid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Profile'),
        ),
        migrations.AddField(
            model_name='department',
            name='fk_organisationid',
            field=models.ForeignKey(db_column='fk_organisationid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Organisation'),
        ),
        migrations.CreateModel(
            name='Board',
            fields=[
                ('pk_boardid', models.AutoField(primary_key=True, serialize=False)),
                ('date_from', models.CharField(max_length=45)),
                ('date_to', models.CharField(max_length=45)),
                ('is_current', models.IntegerField()),
                ('fk_employeeid', models.ForeignKey(db_column='fk_employeeid', on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Employee')),
            ],
            options={
                'db_table': 'board',
                'managed': True,
            },
        ),
    ]
