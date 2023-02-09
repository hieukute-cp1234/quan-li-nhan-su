<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\StaffTypeController;
use App\Http\Controllers\Api\LevelController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\SpecializeController;
use App\Http\Controllers\Api\SalaryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/callback/login/google', [AuthController::class, 'callbackLoginGoogle'])->name('callbackLoginGoogle');

Route::group(['middleware' => 'api.auth'], function() {

    Route::post('/me', [AuthController::class, 'me'])->name('me');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/departments', [DepartmentController::class, 'index'])->name('listDepartment');
    Route::get('/departments/count', [DepartmentController::class, 'count'])->name('countDepartment');
    Route::get('/departments/{id}', [DepartmentController::class, 'show'])->name('showDetailDepartment');

    Route::get('/staff-types', [StaffTypeController::class, 'index'])->name('listType');

    Route::get('/levels', [LevelController::class, 'index'])->name('listLevel');
    Route::get('/roles', [RoleController::class, 'index'])->name('listRole');

    Route::get('/specializes', [SpecializeController::class, 'index'])->name('listSpecialize');

    Route::get('/users/count', [UserController::class, 'countUser'])->name('countUser');
    Route::get('/users/get-all-pm', [UserController::class, 'getAllPM'])->name('getAllPM');
    Route::get('/users/list-users', [UserController::class, 'getAllUsers'])->name('getAllUsers');
    Route::post('/users/update-avatar', [UserController::class, 'updateAvatar'])->name('updateAvatar');
    Route::post('/users/update-profile/{id}', [UserController::class, 'updateProfile'])->name('updateProfile');
    Route::get('/users/show/{id}', [UserController::class, 'getById'])->name('getById');

    Route::group(['middleware' => 'checkRoleAdmin'], function() {

        //Department
        Route::post('/departments', [DepartmentController::class, 'store'])->name('storeNewDepartment');
        Route::put('/departments/{id}', [DepartmentController::class, 'update'])->name('updateDepartment');
        Route::delete('/departments/{id}', [DepartmentController::class, 'delete'])->name('deleteDepartment');

        //Staff type
        Route::post('/staff-types', [StaffTypeController::class, 'store'])->name('storeNewType');
        Route::put('/staff-types/{id}', [StaffTypeController::class, 'update'])->name('updateType');
        Route::delete('/staff-types/{id}', [StaffTypeController::class, 'delete'])->name('deleteStaffType');

        //Role
        Route::post('/roles', [RoleController::class, 'store'])->name('storeNewRole');
        Route::put('/roles/{id}', [RoleController::class, 'update'])->name('updateRoleById');
        Route::delete('/roles/{id}', [RoleController::class, 'delete'])->name('deleteRole');

        //Level
        Route::post('/levels', [LevelController::class, 'store'])->name('storeNewLevel');
        Route::put('/levels/{id}', [LevelController::class, 'update'])->name('updateLevel');
        Route::delete('/levels/{id}', [LevelController::class, 'delete'])->name('deleteLevel');

        //Specialize
        Route::post('/specializes', [SpecializeController::class, 'store'])->name('storeNewSpecialize');
        Route::put('/specializes/{id}', [SpecializeController::class, 'update'])->name('updateSpecialize');
        Route::delete('/specializes/{id}', [SpecializeController::class, 'delete'])->name('deleteSpecialize');

        //Staff
        Route::post('/users/add-new-user', [UserController::class, 'addNewUser'])->name('addNewUser');

        // Salary
        Route::get('/salaries', [SalaryController::class, 'index'])->name('getAllSalary');
        Route::get('/salaries/{id}', [SalaryController::class, 'show'])->name('getSalaryById');
        Route::post('/salaries', [SalaryController::class, 'store'])->name('storeNewSalary');
        Route::put('/salaries/{id}', [SalaryController::class, 'update'])->name('updateSalary');
        Route::post('salaries/send-mail/{id}', [SalaryController::class, 'sendMail'])->name('sendMail');
        Route::post('/salaries/send-mail-all', [SalaryController::class, 'sendMailAll'])->name('sendMailAll');
        Route::delete('/salaries/{id}', [SalaryController::class, 'delete'])->name('deleteSalary');
    });
});
