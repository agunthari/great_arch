<?php
// src/Controller/RfPremiumController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Article;


class RfPremiumController extends AbstractController
{
	/**
     * @Route("/premium", name="rf_premium__home")
     */
    public function home(): Response
    {
        // $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
    	
        return $this->render('@app/pages/rf_premium/home.html.twig', [
            // 'actu_list' => $articles
        ]);
    }

}

