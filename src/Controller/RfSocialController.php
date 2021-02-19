<?php
// src/Controller/RfSocialController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Article;


class RfSocialController extends AbstractController
{
	/**
     * @Route("/rf-social", name="rf_social__home")
     */
    public function home(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();
    	
        return $this->render('@app/pages/rf-social/home.html.twig', [
            'actu_list' => $articles
        ]);
    }


    /**
     * @Route("/rf-social/actu", name="rf_social__actu")
     */
    public function actu(): Response
    {
    	return $this->render('@app/pages/rf-social/actu.html.twig', [
        ]);
    }

    /**
     * @Route("/rf-social/actu/{article}", name="rf_social__actu__article")
     */
    public function actu_article( Article $article): Response
    {
        return $this->render('@app/pages/rf-social/actu_article.html.twig', [
            'article' => $article
        ]);
    }
}

