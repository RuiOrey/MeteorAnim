from django.db import models
from django.utils import timezone


class Entidade(models.Model):
    nome = models.CharField(max_length=200)
    data_creation = models.DateTimeField('data creation')
    data_update = models.DateTimeField('data update')
	DENUCIANTE = 'DE'
	ASSOCIACAO = 'AC'
	OBSERVADOR = 'OB'
	ADVOGADO = 'AD'
	INFRACTOR = 'IF'
	TIPOS_ENTIDADES = (
        (DENUCIANTE, 'Denuciante'),
        (ASSOCIACAO, 'Associação'),
        (OBSERVADOR, 'Observador'),
        (ADVOGADO, 'Advogado'),
        (INFRACTOR, 'Infractor'),
    )
    tipo = models.CharField(max_length = 2,
    						choices = TIPOS_ENTIDADES,
    						default = DENUCIANTE)
    telefone = PhoneNumberField()
	INVISIVEL = 'IN'
	VISIVEL = 'VI'
	PUBLICO = 'PU'
    TIPOS_PRIVACIDADE = (
        (INVISIVEL, 'Invisivel'),
        (VISIVEL, 'Visivel'),
        (PUBLICO, 'Publico'),
    )
    privacidade = models.CharField(max_length = 2,
    						choices = TIPOS_PRIVACIDADE,
    						default = INVISIVEL)
    #user = ?
    TIPOS_SEXO = (
    (1, 'Feminino'),
    (2, 'Masculino'),
    (3, 'Outro/Não quer dizer'),
	)
    sexo = models.IntegerField(choices=TIPOS_SEXO, default=3)


class Infractor(models.Model):
	nome = models.CharField(max_length=200)
    morada = models.CharField(max_length=500)
    contacto_telefonico = PhoneNumberField()

class Animal(models.Model):
	nome = models.CharField(max_length=200)
    especie = models.CharField(max_length=20)
    raca = models.CharField(max_length=20)
    cor = models.CharField(max_length=20)
    photo = models.ImageField(upload_to='animais')

class Denuncia(models.Model)
    ESTADOS_PROCESSO = (
    (1, 'Em curso'),
    (2, 'Terminado'),
    (3, 'Indefinido'),
	)
	estado = models.IntegerField(choices = ESTADOS_PROCESSO,
    						default = 1)
	fotos = models.ImageField(upload_to='processo')


class Ocorrencia(models.Model)
	local = models.CharField(max_length=500)
	data = models.DateTimeField()
	animal = models.ManyToManyField(Animal)
	infractor = models.ManyToManyField(Infractor)
	denuncia = = models.ForeignKey(Denuncia)
	#anexos 
	#mapa