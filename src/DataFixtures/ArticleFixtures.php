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
        $categories = ['Fiscal', 'Social', 'Paye', 'Vie des affaires', 'Comptable', 'Patrimoine'];
    	$faker = Factory::create();

    	for ($i=0; $i < 50; $i++) { 
    		$article = new Article();
    		$article->setTitle( $faker->realText($faker->numberBetween(20,255)) )
    			->setTeaser( $faker->realText($faker->numberBetween(20,1000)) )
    			->setPublicationDate( $faker->dateTime() )
    			->setCategory( $categories[ rand(0, 5) ] )
    		;
    		$manager->persist($article);
    	}

        $manager->flush();
    }
}
