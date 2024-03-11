<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            //? GITHUB DOESN'T HAVE EMAIL
            $provider = strtolower($provider);

            $userSocialite = Socialite::driver($provider)->user();
            $hasUser = User::where('email', $userSocialite->getEmail())->exists();

            if ($hasUser) {
                return Inertia::render('Auth/Login', [
                    'with_errors' => [
                        'email' => 'This email uses different method to login!'
                    ]
                ]);
            }

            $user = User::where([
                'provider' => $provider,
                'provider_id' => $userSocialite->id,
            ])->first();


            if (!$user) {
                $user = User::create([
                    'name' => $userSocialite->name,
                    'email' => $userSocialite->email,
                    'provider' => $provider,
                    'provider_id' => $userSocialite->id,
                    'provider_token' => $userSocialite->token,
                    'email_verified_at' => now(),
                ]);
            }

            // Login User
            Auth::login($user);

            return redirect()->intended(RouteServiceProvider::HOME);
        } catch (\Exception $err) {
            \Log::error("Error: Login page " . $err);
            return Inertia::render('Auth/Login');
        }
    }
}
