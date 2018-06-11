<template>
<section class="home fill-viewport orange lighten-1 ng-scope">
  <div class="row menu_row">
    <div class="navbar-fixed">
      <nav class="orange darken-1">
        <div class="nav-wrapper">

          <div class="container">
            <a href="#!" class="brand-logo">
                <img class="logo" src="img/logo_white_small.png" alt="">
              </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><img class="ava" src="img/avatar.png" alt=""></li>
              <li><a href="#/">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="img/bg_slide_menu.jpg">
          </div>
          <a href="#user"><img class="circle" src="img/avatar.png"></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div>
      </li>
      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
  </div>
  <div class="container">
    <div class="hide-on-med-and-up fixed-action-btn">
      <a class="btn-floating btn-large orange darken-3 ng-isolate-scope" data-target="createModal" modal="">
              <i class="large material-icons ng-scope">add</i>
            </a>
    </div>
    <div class="row">
      <div class="col s12 m4 offset-m4 center hide-on-small-only">
        <a href="" class="waves-effect waves-light orange darken-3 btn ng-isolate-scope" data-target="createModal" modal=""><i class="material-icons left ng-scope">add</i><span class="ng-scope">new book</span></a>
      </div>
      <!-- Creating Modal -->
      <div id="createModal" class="modal">
        <div class="row">
          <form class="col s12 ng-pristine ng-valid">
            <div class="modal-content">
              <h5>Create Book</h5>
              <div class="row">
                <div class="input-field col s12 m6">
                  <i class="material-icons prefix">book</i>
                  <input id="create_title" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.title" type="text">
                  <label for="create_title">Title</label>
                </div>
                <div class="input-field col s12 m6">
                  <i class="material-icons prefix">link</i>
                  <input id="create_url" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.url_cover" type="tel">
                  <label for="create_url">Url Cover</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12 m6">
                  <i class="material-icons prefix">trending_up</i>
                  <input id="create_progress" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.progress" type="number">
                  <label for="create_progress">Progress</label>
                </div>
                <div class="input-field col s12 m6">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="create_author" class="validate" type="tel">
                  <label for="create_author">Author</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">description</i>
                  <input id="create_description" ng-model="vm.description" class="ng-pristine ng-valid ng-empty ng-touched" type="text">
                  <label for="create_description">Description</label>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <a href="" class="modal-action modal-close orange darken-3 waves-effect waves-light btn ng-isolate-scope" ng-click="vm.sendData()" message="Book Added" duration="500" toast="click">Create</a>
              <a href="" class="modal-action modal-close waves-effect waves-light btn-flat">Cancel</a>
            </div>
          </form>
        </div>
      </div>
      <!---->
    </div>
    <div class="row">
      <!-- ngRepeat: book in vm.listBooks -->
      <div class="col s12 m3 ng-scope" ng-repeat="book in vm.listBooks">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="https://www.booklya.ua/content/upload/product/36k/36659/290x290/123906/piknik-na-obochine.jpg">
          </div>
          <div class="card-content">
            <span tooltipped="" class="card-title grey-text text-darken-4 truncate ng-binding tooltipped" data-position="top" data-delay="20" data-tooltip="Пикник на обочине" data-tooltip-id="92f5037a-d175-21f6-8ff8-c9bfc45bd842"><span class="ng-binding ng-scope">Пикник на обочине</span></span>
            <div class="progress">
              <div tooltipped="" class="determinate tooltipped" data-position="bottom" data-delay="20" data-tooltip="98 / 100" style="width: 98%" data-tooltip-id="130f64a9-757d-df4b-bbdb-2b299556119b"></div>
            </div>
            <div class="chip">
              fantastic
            </div>
            <div class="chip">
              tale
            </div>
            <a href="" class="right ng-isolate-scope" data-activates="drop5b03a5c906e02f01b9cf87ae" dropdown="" data-hover="true"><i class="material-icons">more_vert</i></a>
            <ul id="drop5b03a5c906e02f01b9cf87ae" class="dropdown-content">
              <li><a href="" data-target="editModal5b03a5c906e02f01b9cf87ae" modal="" class="ng-isolate-scope"><i class="material-icons right ng-scope" ng-click="vm.prepareInputs(book._id.$oid)">edit</i></a></li>
              <li><a href="" data-target="deleteModal5b03a5c906e02f01b9cf87ae" modal="" class="ng-isolate-scope"><i class="material-icons right ng-scope">delete</i></a></li>
            </ul>

          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4 ng-binding"><i class="material-icons right">close</i>Пикник на обочине</span>
            <p class="ng-binding">«Пикни́к на обо́чине» — фантастическая повесть братьев Стругацких, впервые изданная в 1972 году. Повесть лидирует среди прочих произведений авторов по количеству переводов на иностранные языки и изданиям за пределами бывшего СССР.</p>
          </div>
        </div>
        <!-- Deleting Modal -->
        <div id="deleteModal5b03a5c906e02f01b9cf87ae" class="modal">
          <div class="modal-content">
            <h5>Are you sure?</h5>
          </div>
          <div class="modal-footer">
            <a href="" class="modal-action modal-close orange darken-3 waves-effect waves-light btn">No</a>
            <a href="" class="modal-action modal-close waves-effect waves-light btn-flat" ng-click="vm.deleteData(book._id.$oid)" message="Book Deleted" duration="500">Yes</a>
          </div>
        </div>
        <!-- Editing Modal -->
        <div id="editModal5b03a5c906e02f01b9cf87ae" class="modal">
          <div class="row">
            <form action="" class="col s12 ng-pristine ng-valid">
              <div class="modal-content">
                <h5>Update Book</h5>
                <div class="row">
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">book</i>
                    <input id="edit_title" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.title" type="text">
                    <label for="edit_title">Title</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">link</i>
                    <input id="edit_url" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.url_cover" type="tel">
                    <label for="edit_url">Url Cover</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">trending_up</i>
                    <input id="edit_progress" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.progress" type="number">
                    <label for="edit_progress">Progress</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="edit_author" class="validate" type="tel">
                    <label for="edit_author">Author</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">description</i>
                    <input id="edit_description" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.description" type="tel">
                    <label for="edit_description">Description</label>
                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <a href="" class="modal-action modal-close orange darken-3 waves-effect waves-light btn" ng-click="vm.changeData(book._id.$oid)" message="Book Edited" duration="500">Update</a>
                <a href="" class="modal-action modal-close waves-effect waves-light btn-flat">Cancel</a>
              </div>
            </form>
          </div>
        </div>
        <!---->
      </div>
      <!-- end ngRepeat: book in vm.listBooks -->
      <div class="col s12 m3 ng-scope" ng-repeat="book in vm.listBooks">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="https://images.manning.com/720/960/resize/book/5/d941fba-d0bd-43fc-92b4-57932d1fe7fb/black3.png">
          </div>
          <div class="card-content">
            <span tooltipped="" class="card-title grey-text text-darken-4 truncate ng-binding tooltipped" data-position="top" data-delay="20" data-tooltip="The Well Grounded Rubyist" data-tooltip-id="34e567a1-9c70-9b59-f793-35e4b659e62e"><span class="ng-binding ng-scope">The Well Grounded Rubyist</span></span>
            <div class="progress">
              <div tooltipped="" class="determinate tooltipped" data-position="bottom" data-delay="20" data-tooltip=" / 100" style="width: %" data-tooltip-id="22700956-5685-64cf-308c-b51ea7267d42"></div>
            </div>
            <div class="chip">
              fantastic
            </div>
            <div class="chip">
              tale
            </div>
            <a href="" class="right ng-isolate-scope" data-activates="drop5b10caaf06e02f1ba25117f5" dropdown="" data-hover="true"><i class="material-icons">more_vert</i></a>
            <ul id="drop5b10caaf06e02f1ba25117f5" class="dropdown-content">
              <li><a href="" data-target="editModal5b10caaf06e02f1ba25117f5" modal="" class="ng-isolate-scope"><i class="material-icons right ng-scope" ng-click="vm.prepareInputs(book._id.$oid)">edit</i></a></li>
              <li><a href="" data-target="deleteModal5b10caaf06e02f1ba25117f5" modal="" class="ng-isolate-scope"><i class="material-icons right ng-scope">delete</i></a></li>
            </ul>

          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4 ng-binding"><i class="material-icons right">close</i>The Well Grounded Rubyist</span>
            <p class="ng-binding">Ruby is a dynamic language perfect for creating applications, development tools, and administrative scripts.</p>
          </div>
        </div>
        <!-- Deleting Modal -->
        <div id="deleteModal5b10caaf06e02f1ba25117f5" class="modal">
          <div class="modal-content">
            <h5>Are you sure?</h5>
          </div>
          <div class="modal-footer">
            <a href="" class="modal-action modal-close orange darken-3 waves-effect waves-light btn">No</a>
            <a href="" class="modal-action modal-close waves-effect waves-light btn-flat" ng-click="vm.deleteData(book._id.$oid)" message="Book Deleted" duration="500">Yes</a>
          </div>
        </div>
        <!-- Editing Modal -->
        <div id="editModal5b10caaf06e02f1ba25117f5" class="modal">
          <div class="row">
            <form action="" class="col s12 ng-pristine ng-valid">
              <div class="modal-content">
                <h5>Update Book</h5>
                <div class="row">
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">book</i>
                    <input id="edit_title" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.title" type="text">
                    <label for="edit_title">Title</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">link</i>
                    <input id="edit_url" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.url_cover" type="tel">
                    <label for="edit_url">Url Cover</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">trending_up</i>
                    <input id="edit_progress" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.progress" type="number">
                    <label for="edit_progress">Progress</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="edit_author" class="validate" type="tel">
                    <label for="edit_author">Author</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">description</i>
                    <input id="edit_description" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.description" type="tel">
                    <label for="edit_description">Description</label>
                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <a href="" class="modal-action modal-close orange darken-3 waves-effect waves-light btn" ng-click="vm.changeData(book._id.$oid)" message="Book Edited" duration="500">Update</a>
                <a href="" class="modal-action modal-close waves-effect waves-light btn-flat">Cancel</a>
              </div>
            </form>
          </div>
        </div>
        <!---->
      </div>
      <!-- end ngRepeat: book in vm.listBooks -->
      <div class="col s12 m3 ng-scope" ng-repeat="book in vm.listBooks">
        <div class="card hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="http://patshaughnessy.net/assets/images/RUM_coverfront.png">
          </div>
          <div class="card-content">
            <span tooltipped="" class="card-title grey-text text-darken-4 truncate ng-binding tooltipped" data-position="top" data-delay="20" data-tooltip="Ruby Under a Microscope" data-tooltip-id="5627f825-a8e6-672d-e21a-b4a02b81b5fe"><span class="ng-binding ng-scope">Ruby Under a Microscope</span></span>
            <div class="progress">
              <div tooltipped="" class="determinate tooltipped" data-position="bottom" data-delay="20" data-tooltip=" / 100" style="width: %" data-tooltip-id="ea66644f-e82a-86c7-cc24-82448be1ee38"></div>
            </div>
            <div class="chip">
              fantastic
            </div>
            <div class="chip">
              tale
            </div>
            <a href="" class="right ng-isolate-scope" data-activates="drop5b10cac006e02f1ba25117f6" dropdown="" data-hover="true" style=""><i class="material-icons">more_vert</i></a>
            <ul id="drop5b10cac006e02f1ba25117f6" class="dropdown-content" style="width: 24px; position: absolute; top: 322.15px; left: 105.233px; opacity: 1; display: none;">
              <li><a href="" data-target="editModal5b10cac006e02f1ba25117f6" modal="" class="ng-isolate-scope"><i class="material-icons right ng-scope" ng-click="vm.prepareInputs(book._id.$oid)">edit</i></a></li>
              <li><a href="" data-target="deleteModal5b10cac006e02f1ba25117f6" modal="" class="ng-isolate-scope"><i class="material-icons right ng-scope">delete</i></a></li>
            </ul>

          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4 ng-binding"><i class="material-icons right">close</i>Ruby Under a Microscope</span>
            <p class="ng-binding">Ruby is a powerful programming language with a focus on simplicity, but beneath its elegant syntax it performs countless unseen tasks.</p>
          </div>
        </div>
        <!-- Deleting Modal -->
        <div id="deleteModal5b10cac006e02f1ba25117f6" class="modal">
          <div class="modal-content">
            <h5>Are you sure?</h5>
          </div>
          <div class="modal-footer">
            <a href="" class="modal-action modal-close orange darken-3 waves-effect waves-light btn">No</a>
            <a href="" class="modal-action modal-close waves-effect waves-light btn-flat" ng-click="vm.deleteData(book._id.$oid)" message="Book Deleted" duration="500">Yes</a>
          </div>
        </div>
        <!-- Editing Modal -->
        <div id="editModal5b10cac006e02f1ba25117f6" class="modal">
          <div class="row">
            <form action="" class="col s12 ng-pristine ng-valid">
              <div class="modal-content">
                <h5>Update Book</h5>
                <div class="row">
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">book</i>
                    <input id="edit_title" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.title" type="text">
                    <label for="edit_title">Title</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">link</i>
                    <input id="edit_url" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.url_cover" type="tel">
                    <label for="edit_url">Url Cover</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">trending_up</i>
                    <input id="edit_progress" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.progress" type="number">
                    <label for="edit_progress">Progress</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="edit_author" class="validate" type="tel">
                    <label for="edit_author">Author</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <i class="material-icons prefix">description</i>
                    <input id="edit_description" class="validate ng-pristine ng-valid ng-empty ng-touched" ng-model="vm.currentBook.description" type="tel">
                    <label for="edit_description">Description</label>
                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <a href="" class="modal-action modal-close orange darken-3 waves-effect waves-light btn" ng-click="vm.changeData(book._id.$oid)" message="Book Edited" duration="500">Update</a>
                <a href="" class="modal-action modal-close waves-effect waves-light btn-flat">Cancel</a>
              </div>
            </form>
          </div>
        </div>
        <!---->
      </div>
      <!-- end ngRepeat: book in vm.listBooks -->
    </div>
  </div>
</section>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
