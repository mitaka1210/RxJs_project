import DashBoardComponent from './dash-board/dash-board.component.vue';
import Component from 'vue-class-component';
import CustomDataVisualizerComponent from '@/custom-data-visualizer/custom-data-visualizer.component.vue';

@Component(
  {
    components: {
      DashBoardComponent,
      CustomDataVisualizerComponent,
    }
  }
)
export default class AppMainComponent {  
  
}
