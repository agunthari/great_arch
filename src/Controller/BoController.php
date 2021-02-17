<?php
// src/Controller/BoController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Form\FormFactoryInterface;

use App\Form\Type\ArticleType;
use App\Entity\Article;


class BoController extends AbstractController
{
	/**
     * @Route("/bo", name="bo__dashboard")
     */
    public function dashboard(): Response
    {
        return $this->render('bo/dashboard.html.twig', [
        ]);
    }

    /**
     * @Route("/bo/article", name="bo__article__list")
     */
    public function article_list(): Response
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();

        return $this->render('bo/article/list.html.twig', [
        	'collection' => $articles
        ]);
    }

    /**
     * @Route("/bo/article/{article}", name="bo__article__edit")
     */
    public function article_edit(Request $request, FormFactoryInterface $formFactory, Article $article): Response
    {
        $form = $formFactory->createBuilder(ArticleType::class, $article, [
            // 'action' => '/search',
            // 'method' => 'GET',
        ])->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            // $article = $form->getData();

            $this->getDoctrine()->getManager()->flush();
        }

        return $this->render('bo/article/edit.html.twig', [
        	'item' => $article,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/bo/article/{article}/delete", name="bo__article__delete")
     */
    public function article_delete(Article $article): Response
    {
        return $this->render('bo/article/edit.html.twig', [
        	'item' => $article
        ]);
    }
}
