<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;

class UserFixtures extends Fixture
{
	private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
    	$user = new User();
        $salt = base64_encode( random_bytes(20) );
       	$user->setEmail('agontier@grouperf.com')
            ->setSalt( $salt )
        	->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'HelloWorld'
	    ));
        	
        $manager->persist($user);

        $user = new User();
        $salt = base64_encode( random_bytes(20) );
        $user->setEmail('jwullems@grouperf.com')
            ->setSalt( $salt )
            ->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'HelloWorld'
        ));
            
        $manager->persist($user);

        $manager->flush();
    }
}
