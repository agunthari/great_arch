<?php
// src/Controller/RfController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Article;


class RfController extends AbstractController
{
	/**
     * @Route("/", name="rf__home")
     */
    public function home(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
    	
        return $this->render('@app/pages/rf/home.html.twig', [
            'actu_list' => $articles
        ]);
    }

    /**
     * @Route("/nos-valeurs", name="rf__our_values")
     */
    public function ourValues(): Response
    {
        return $this->render('@app/pages/rf/nos_valeurs.html.twig', [
        ]);
    }

}

