import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    // Clean the DB
    await this.pokemonModel.deleteMany({});

    const pokemonsToInsert: CreatePokemonDto[] = [];

    const { data } = await this.axios<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=200',
    );

    data.results.forEach(async ({ name, url }) => {
      // url value: https://pokeapi.co/api/v2/pokemon/2/
      const segments = url.split('/');
      const no: number = +segments.at(-2);
      pokemonsToInsert.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonsToInsert);

    return {
      message: 'Seed executed successfully!',
    };
  }
}
