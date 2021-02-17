<?php
namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\OptionsResolver\OptionsResolver;

use App\Entity\Article;

class ArticleType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre',
            ])
            ->add('teaser', TextareaType::class, [
                'label' => 'Sommaire',
            ])
            ->add('category', ChoiceType::class, [
                'label' => 'Categorie',
                'choices' => [
                    'Social' => 'Social',
                    'Paye' => 'Paye',
                ],
            ])
            ->add('publication_date', DateType::class, [
                'widget' => 'single_text',
                'label' => 'Date de Publication',
            ])
        ;
    }


}