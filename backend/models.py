# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Role(models.Model):
    pk_roleid = models.AutoField(primary_key=True)
    role = models.CharField(max_length=45)
    role_description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'role'


class Permission(models.Model):
    pk_permissionid = models.AutoField(primary_key=True)
    permission = models.CharField(max_length=45)
    permission_description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'permission'    


class RolePermission(models.Model):
    pk_role_permissionid = models.AutoField(primary_key=True)
    fk_roleid = models.ForeignKey(Role, models.DO_NOTHING, db_column='fk_roleid')
    fk_role_permissionid = models.ForeignKey(Permission, models.DO_NOTHING, db_column='fk_role_permissionid')

    class Meta:
        managed = False
        db_table = 'role_permission'       


class Title(models.Model):
    pk_titleid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'title'

        
class Profile(models.Model):
    pk_profileid = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    fk_titleid = models.ForeignKey('Title', models.DO_NOTHING, db_column='fk_titleid')
    profile_photo = models.CharField(max_length=45, blank=True, null=True)  
    mobile = models.CharField(max_length=45, blank=True, null=True)  

    class Meta:
        managed = True
        db_table = 'profile'   

class ProfileRole(models.Model):
    pk_profile_roleid = models.AutoField(primary_key=True)
    fk_profileid = models.ForeignKey('Profile', models.DO_NOTHING, db_column='fk_profileid')
    fk_roleid = models.ForeignKey('Role', models.DO_NOTHING, db_column='fk_roleid')

    class Meta:
        managed = True
        db_table = 'profile_role'        


class ProfileOrganisation(models.Model):
    pk_profile_organisationid = models.AutoField(primary_key=True)
    fk_profileid = models.ForeignKey('Profile', models.DO_NOTHING, db_column='fk_profileid')
    fk_organisationid = models.ForeignKey('Organisation', models.DO_NOTHING, db_column='fk_organisationid')

    class Meta:
        managed = False
        db_table = 'profile_organisation'           


class Employee(models.Model):
    pk_employeeid = models.AutoField(primary_key=True)
    fk_profileid = models.ForeignKey('Profile', models.DO_NOTHING, db_column='fk_profileid')
    employee_number = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'employee'


class Board(models.Model):
    pk_boardid = models.AutoField(primary_key=True)
    fk_employeeid = models.ForeignKey('Employee', models.DO_NOTHING, db_column='fk_employeeid')
    date_from = models.CharField(max_length=45)
    date_to = models.CharField(max_length=45)
    is_current = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'board'


class Organisation(models.Model):
    pk_organisationid = models.AutoField(primary_key=True)
    organisation = models.CharField(max_length=45)
    address_1 = models.CharField(max_length=45)
    address_2 = models.CharField(max_length=45, blank=True, null=True)
    email = models.CharField(max_length=45, blank=True, null=True)
    phone = models.CharField(max_length=45, blank=True, null=True)
    code = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'organisation'        


class Department(models.Model):
    pk_departmentid = models.AutoField(primary_key=True)
    fk_organisationid = models.ForeignKey('Organisation', models.DO_NOTHING, db_column='fk_organisationid')
    department = models.CharField(max_length=45)
    department_description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'department'
        

class Positon(models.Model):
    pk_positonid = models.AutoField(primary_key=True)
    fk_departmentid = models.ForeignKey(Department, models.DO_NOTHING, db_column='fk_departmentid')
    appraiser = models.IntegerField()
    positon = models.CharField(max_length=45)
    position_description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'positon'

class EmployeePositon(models.Model):
    pk_employee_positonid = models.AutoField(primary_key=True)
    fk_employeeid = models.ForeignKey(Employee, models.DO_NOTHING, db_column='fk_employeeid')
    pk_positonid = models.ForeignKey('Positon', models.DO_NOTHING, db_column='pk_positonid')
    date_from = models.DateField()
    date_to = models.DateField(blank=True, null=True)
    is_current = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'employee_positon'