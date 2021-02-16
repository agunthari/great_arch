<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Article;
use Faker\Factory;

class ArticleFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
    	$faker = Factory::create();

    	for ($i=0; $i < 10; $i++) { 
    		$article = new Article();
    		$article->setTitle( $faker->realText($faker->numberBetween(20,255)) )
    			->setTeaser( $faker->realText($faker->numberBetween(20,1000)) )
    			->setPublicationDate( $faker->dateTime() )
    			->setCategory( rand(0, 1) ? 'Social' : 'Paye' )
    		;
    		$manager->persist($article);
    	}

        $manager->flush();
    }
}
