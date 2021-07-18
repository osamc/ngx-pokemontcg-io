import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PokemontcgIoService } from './services/pokemontcg-io.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  providers: [PokemontcgIoService]
})
export class NgxPokemonTcgIoModule {}
