<?php
// src/Controller/RfMyActuController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Article;


class RfMyActuController extends AbstractController
{
	/**
     * @Route("/actualite", name="rf_myactu__home")
     */
    public function home(): Response
    {
        // $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
    	
        return $this->render('@app/pages/rf_myactu/home.html.twig', [
            // 'actu_list' => $articles
        ]);
    }

}

