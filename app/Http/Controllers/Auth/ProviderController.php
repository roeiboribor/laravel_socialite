<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller
{
    public function redirect($provider = '')
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider = '')
    {
        $provider = strtolower($provider);
        $userSocialite = Socialite::driver($provider)->user();

        //? GITHUB DOESN'T HAVE EMAIL
        $user = User::updateOrCreate(
            [
                'provider_id' => $userSocialite->id,
                'provider' => $provider
            ],
            [
                'name' => $userSocialite->name,
                'email' => $userSocialite->email,
                'provider_token' => $userSocialite->token,
            ]
        );

        Auth::login($user);

        return redirect('/dashboard');
    }
}
