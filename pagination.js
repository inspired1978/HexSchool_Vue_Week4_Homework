// 1. 把元件環境建立好
// 2. 版型加入
// 3. 解除版型內錯誤

export default {
    props: ['pages', 'getData'],
    template: `<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{disabled: !pages.has_pre}">
        <a class="page-link" href="#" aria-label="Previous" @click="getData(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li class="page-item" :class="{active: page === pages.current_page }" v-for="page in pages.total_pages" :key="page + 123">
        <a class="page-link" href="#" @click="getData(page)"> {{page}} </a>
      </li>

      <li class="page-item" :class="{disabled: !pages.has_next}">
        <a class="page-link" href="#" aria-label="Next" @click="getData(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>`
}