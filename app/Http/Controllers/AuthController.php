<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function index()
    {

        return response()->json(User::latest()->get());
    }

    public function register(Request $request)
    {
        $fields = $request->validate([

            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string',

        ]);


        $user = User::create([

            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => $fields['password'],

        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;



        $response = [

            'user' => $user,
            'token' => $token

        ];


        return response($response, 201);
    }



    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);


        $user = User::where('email', $fields['email'])->first();


        if (!$user || !Hash::check($fields['password'], $user->password)) {

            return response([

                'message' => 'Bad creadential',
            ], 201);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;



        $response = [

            'user' => $user,
            'token' => $token

        ];


        return response($response, 201);
    }



    public function user($id)
    {
        $user = User::find($id);
        return Response()->json($user);
    }
}
