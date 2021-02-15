<?php 

namespace App\Security\Encoder;

use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class RFPasswordEncoder implements PasswordEncoderInterface
{
    private const MAX_PASSWORD_LENGTH = 4096;

    public function encodePassword(string $raw, ?string $salt): string
    {
    	if (empty($raw) || strlen($raw) > self::MAX_PASSWORD_LENGTH ){
            throw new BadCredentialsException('Invalid password.');
    	}
    	$pwd_bin = hash_pbkdf2('sha1', $raw, base64_decode($salt), 1, 64, true);

    	return base64_encode($pwd_bin);
    }


    public function isPasswordValid(string $encoded, string $raw, ?string $salt): bool
    {
    	$pwd_encoded = $this->encodePassword($raw, $salt);

    	return $pwd_encoded == $encoded;
    }


    public function needsRehash(string $encoded): bool
    {
    	return false;
    }

}