<template>
<!-- eslint-disable -->
<div class="container scrolling-element">
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Accordion</h2>
      <ods-accordion v-model="activeNames" @change="handleChange">
        <ods-accordion-item title="Consistency" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
          <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
        </ods-accordion-item>
        <ods-accordion-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
          <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
        </ods-accordion-item>
        <ods-accordion-item title="Efficiency" name="3">
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
          <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
        </ods-accordion-item>
        <ods-accordion-item title="Controllability" name="4">
          <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
          <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
        </ods-accordion-item>
      </ods-accordion>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Actions Menu</h2>
      <div class="flex-container">
        <ods-actions-menu
          customClass="my-custom-popover"
          icon="home">
          <ul>
            <li>My content</li>
            <li>My content</li>
            <li>My content</li>
            <li>My content</li>
          </ul>
        </ods-actions-menu>
        <ods-actions-menu
          customClass="my-custom-popover"
          text="Luis López">
          <ul>
            <li>My content</li>
            <li>My content</li>
            <li>My content</li>
            <li>My content</li>
          </ul>
        </ods-actions-menu>
      </div>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Alert</h2>
      <ods-alert
        class="m-b-20"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies ligula non augue bibendum, vitae fermentum odio faucibus. Suspendisse vestibulum, tellus sit amet ultricies bibendum, felis mi imperdiet mi, et ultrices diam massa sit amet enim. "
        show-icon
        title="Success alert"
        type="success" 
        width="400">
      </ods-alert>
      <ods-alert
        class="m-b-20"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies ligula non augue bibendum, vitae fermentum odio faucibus. Suspendisse vestibulum, tellus sit amet ultricies bibendum, felis mi imperdiet mi, et ultrices diam massa sit amet enim. "
        show-icon
        title="Info alert"
        type="info"
        width="400">
      </ods-alert>
      <ods-alert
        class="m-b-20"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies ligula non augue bibendum, vitae fermentum odio faucibus. Suspendisse vestibulum, tellus sit amet ultricies bibendum, felis mi imperdiet mi, et ultrices diam massa sit amet enim. "
        show-icon
        title="Warning alert"
        type="warning"
        width="400">
      </ods-alert>
      <ods-alert
        class="m-b-20"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies ligula non augue bibendum, vitae fermentum odio faucibus. Suspendisse vestibulum, tellus sit amet ultricies bibendum, felis mi imperdiet mi, et ultrices diam massa sit amet enim. "
        show-icon
        title="Error alert"
        type="error"
        width="400">
      </ods-alert>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Avatar</h2>
      <ods-avatar size="small">
        <img alt="onesait default avatar" src="@/assets/images/header/avatar.svg">
      </ods-avatar>
      <ods-avatar size="medium">
        <img alt="onesait default avatar" src="@/assets/images/header/avatar.svg">
      </ods-avatar>
      <ods-avatar size="large">
        <img alt="onesait default avatar" src="@/assets/images/header/avatar.svg">
      </ods-avatar>
      <ods-avatar size="xlarge">
        <img alt="onesait default avatar" src="@/assets/images/header/avatar.svg">
      </ods-avatar>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Badge</h2>
      <h6>Defaults</h6>
      <div class="m-b-20">
        <ods-badge value="4" type="primary" class="m-r-15"/>
        <ods-badge value="1320" type="primary" class="m-r-15"/>
        <ods-badge type="primary" class="m-r-15" is-dot/>
        <ods-badge value="4" type="primary" class="m-r-15" is-line/>
        <ods-badge value="1320" type="primary" is-line/>
      </div>
      <div class="m-b-20">
        <ods-badge value="4" type="secondary" class="m-r-15"/>
        <ods-badge value="1320" type="secondary" class="m-r-15"/>
        <ods-badge type="secondary" is-dot/>
      </div>
      <div class="m-b-20">
        <ods-badge value="4" type="success" class="m-r-15"/>
        <ods-badge value="1320" type="success" class="m-r-15"/>
        <ods-badge type="success" is-dot/>
      </div>
      <div class="m-b-20">
        <ods-badge value="4" type="warning" class="m-r-15"/>
        <ods-badge value="1320" type="warning" class="m-r-15"/>
        <ods-badge type="warning" is-dot/>
      </div>
      <div class="m-b-20">
        <ods-badge value="4" type="danger" class="m-r-15"/>
        <ods-badge value="1320" type="danger" class="m-r-15"/>
        <ods-badge type="danger" is-dot/>
      </div>
      <div class="m-b-20">
        <ods-badge value="4" type="info" class="m-r-15"/>
        <ods-badge value="1320" type="info" class="m-r-15"/>
        <ods-badge type="info" is-dot/>
      </div>
      <h6>Button with badge</h6>
      <ods-badge value="new" class="m-r-20">
        <ods-button size="small">comments</ods-button>
      </ods-badge>
      <ods-badge value="hot">
        <ods-button size="small">replies</ods-button>
      </ods-badge>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Breadcrumb</h2>
      <ods-breadcrumb separator=">">
        <ods-breadcrumb-item :to="{ path: '/' }">Path 1</ods-breadcrumb-item>
        <ods-breadcrumb-item>Detail</ods-breadcrumb-item>
      </ods-breadcrumb>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Button</h2>
      <ods-button full class="m-b-15 m-l-0">Primary positive</ods-button>
      <ods-button full class="m-b-15 m-l-0" disabled>Primary positive disabled</ods-button>
      <ods-button full class="m-b-15 m-l-0" icon="ods-icon-plus" circle size="small">Primary positive circle</ods-button>
      <ods-button full class="m-b-15 m-l-0" icon="ods-icon-plus" circle disabled>Primary positive circle disabled</ods-button>
      
      <ods-button full class="m-b-15 m-l-0" type="secondary">Secondary positive</ods-button>
      <ods-button full class="m-b-15 m-l-0" type="secondary" disabled>Secondary positive disabled</ods-button>
      <ods-button full class="m-b-15 m-l-0" type="secondary" icon="ods-icon-plus" circle>Secondary positive circle</ods-button>
      <ods-button full class="m-b-15 m-l-0" type="secondary" icon="ods-icon-plus" circle disabled>Secondary positive circle disabled</ods-button>

      <ods-button full class="m-b-15 m-l-0" type="text">Text positive</ods-button>
      <ods-button full class="m-b-15 m-l-0" type="text" disabled>Text positive disabled</ods-button>
      <div class="accent-background">
        <ods-button full class="m-b-15 m-l-0" negative>Primary negative</ods-button>
        <ods-button full class="m-b-15 m-l-0" negative disabled>Primary negative disabled</ods-button>
        <ods-button full class="m-b-15 m-l-0" icon="ods-icon-plus" negative circle>Primary negative circle</ods-button>
        <ods-button full class="m-b-15 m-l-0" icon="ods-icon-plus" negative circle disabled>Primary negative circle disabled</ods-button>
  
        <ods-button full class="m-b-15 m-l-0" type="secondary" negative>Secondary negative</ods-button>
        <ods-button full class="m-b-15 m-l-0" type="secondary" negative disabled>Secondary negative disabled</ods-button>
        <ods-button full class="m-b-15 m-l-0" type="secondary" icon="ods-icon-plus" negative circle>Secondary negative circle</ods-button>
        <ods-button full class="m-b-15 m-l-0" type="secondary" icon="ods-icon-plus" negative circle disabled>Secondary negative circle disabled</ods-button>
  
        <ods-button full class="m-b-15 m-l-0" type="text" negative>Text negative</ods-button>
        <ods-button full class="m-b-15 m-l-0" type="text" negative disabled>Text negative disabled</ods-button>
      </div>

    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Cascader</h2>
      <h6>With label</h6>
      <ods-cascader
        :options="cascaderOptions"
        v-model="selectedOptions"
        @change="handleChange"
        cascaderLabel="My AAA label"
        showCascaderLabel />
      <h6>No label</h6>
      <ods-cascader
        :options="cascaderOptions"
        v-model="selectedOptions"
        @change="handleChange"
        cascaderLabel="My AAA label" />
        <h6>Cascader filterable</h6>
        <ods-cascader
          placeholder="Try searching: Guide"
          :options="cascaderOptions"
          filterable
          cascaderLabel="My filterable Cascader"
          showCascaderLabel />
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Checkbox</h2>
      <ods-checkbox
        v-model="checked"
        checkboxLabel="my-label">Opción</ods-checkbox>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Datepicker</h2>
      <ods-date-picker
        :specialDays="specialDates"
        inputLabel="My super label"
        v-model="datepickerA"
        type="date"
        placeholder="Selecciona día"
        :clearable="false">
      </ods-date-picker>
      <h6>Shortcuts</h6>
      <ods-date-picker
        v-model="datepickerB"
        type="date"
        placeholder="Selecciona día"
        :picker-options="pickerOptions2">
      </ods-date-picker>
      <h6>Range</h6>
      <ods-date-picker
        v-model="datepickerC"
        type="daterange"
        range-separator="To"
        start-placeholder="Fecha inicio"
        end-placeholder="Fecha fin">
      </ods-date-picker>
      <h6>Range (onlyOneCalendar)</h6>
      <ods-date-picker
        v-model="datepickerC"
        onlyOneCalendar
        type="daterange"
        range-separator="To"
        start-placeholder="Fecha inicio"
        end-placeholder="Fecha fin">
      </ods-date-picker>
      <h6>Range & Shortcuts</h6>
      <ods-date-picker
        v-model="datepickerD"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="To"
        start-placeholder="Fecha inicio"
        end-placeholder="Fecha fin"
        :picker-options="pickerOptions">
      </ods-date-picker>
      <h6>Date time picker & shortcuts</h6>
      <ods-date-picker
        v-model="datepickerD"
        type="datetime"
        placeholder="Select date and time"
        :picker-options="pickerOptions1">
      </ods-date-picker>
      <h6>Date time picker & cancel button</h6>
      <ods-date-picker
        v-model="datepickerE"
        type="datetimerange"
        align="right"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-time="['12:00:00', '08:00:00']">
      </ods-date-picker>
    </ods-col>
    <ods-col :xs="24" :sm="9" :lg="3">
      <h2>Dialog</h2>
      <ods-button type="text" @click="dialogVisible = true">Open</ods-button>
      <ods-dialog
        title="Dialog title"
        :visible.sync="dialogVisible"
        width="45%"
        :before-close="handleClose"
        :append-to-body="true">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <ods-button type="text" @click="dialogVisible = false">Cancel</ods-button>
          <ods-button @click="dialogVisible = false">Confirm</ods-button>
        </span>
        <ods-row>
          <ods-col :span="12">
            <p>Dummy content</p>
          </ods-col>
          <ods-col :span="6">
            <ods-select 
              v-model="select1"
              placeholder="Select"
              size="deci"
              selectLabel="My label">
              <ods-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </ods-option>
            </ods-select>
          </ods-col>
          <ods-col :span="6">
            <ods-select 
              v-model="select1"
              placeholder="Select"
              size="deci"
              selectLabel="My label">
              <ods-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
              </ods-option>
            </ods-select>
          </ods-col>
        </ods-row>
      </ods-dialog>
      <h6>Custom transition</h6>
      <ods-button type="text" @click="dialogVisible2 = true">Open</ods-button>
      <ods-dialog
        title="Dialog title"
        :visible.sync="dialogVisible2"
        width="45%"
        :before-close="handleClose"
        :append-to-body="true"
        transitionName="ods-slide-in-left">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <ods-button type="text" @click="dialogVisible2 = false">Cancel</ods-button>
          <ods-button @click="dialogVisible2 = false">Confirm</ods-button>
        </span>
      </ods-dialog> 
    </ods-col>
    <ods-col :xs="24" :sm="15" :lg="9">
      <h2>Form</h2>
      <ods-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
        <ods-form-item label="Password" prop="pass">
          <ods-input type="password" show-password v-model="ruleForm2.pass" autocomplete="off"></ods-input>
        </ods-form-item>
        <ods-form-item label="Confirm" prop="checkPass">
          <ods-input type="password" show-password v-model="ruleForm2.checkPass" autocomplete="off"></ods-input>
        </ods-form-item>
        <ods-form-item label="Age" prop="age">
          <ods-input v-model.number="ruleForm2.age"></ods-input>
        </ods-form-item>
        <ods-form-item label="Demo" prop="demo">
          <ods-select
            id="demo"
            clearable
            v-model="select4"
            multiple
            collapse-tags
            placeholder="Select">
            <ods-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </ods-option>
          </ods-select>
        </ods-form-item>
        <ods-form-item>
          <ods-button type="primary" @click="submitForm('ruleForm2')">Submit</ods-button>
          <ods-button @click="resetForm('ruleForm2')">Reset</ods-button>
        </ods-form-item>
      </ods-form>
      <!-- <h6>Inline</h6>
        <ods-form inline :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
           <ods-form-item label="Password" prop="pass">
            <ods-input placeholder="Password" id="pass" type="password" v-model="ruleForm2.pass" auto-complete="off"></ods-input>
          </ods-form-item>
          <ods-form-item class="m-r-0" label="Confirm" prop="checkPass">
            <ods-input type="password" id="checkPass" v-model="ruleForm2.checkPass" auto-complete="off"></ods-input>
          </ods-form-item>
          <ods-form-item>
            <ods-button type="primary" @click="submitForm('ruleForm2')">Submit</ods-button>
            <ods-button @click="resetForm('ruleForm2')">Reset</ods-button>
          </ods-form-item>
        </ods-form> -->
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Icon</h2>
        <ods-icon name="central-point" size="22" />
        <ods-icon name="configure" size="22" />
        <ods-icon name="delete" size="22" />
        <br><br>
        <ods-icon name="search" size="22" />
        <ods-icon name="clip" size="22" />
        <ods-icon name="eye" size="34" />
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Input</h2>
      <h6>Input</h6>
      <ods-input
        class="m-b-10"
        placeholder="Default"
        v-model="input"
        label="My input label"
        show-password />
      <ods-input class="m-b-10" placeholder="Readonly" value="Readony" readonly />
      <ods-input class="m-b-10" placeholder="White" v-model="input" isWhite />
      <ods-input class="m-b-10" placeholder="Disabled" disabled v-model="input" />
      <ods-input class="m-b-10" placeholder="Disabled WHITE" disabled v-model="input" isWhite />
      <h6>Clearable</h6>
      <ods-input class="m-b-10" clearable placeholder="Icon suffix" suffix-icon="ods-icon-calendar" v-model="input" />
      <ods-input class="m-b-10" placeholder="Icon prefix in slot" v-model="input">
        <i slot="prefix" class="ods-input__icon ods-icon-search"></i>
      </ods-input>
      <ods-input class="m-b-10" placeholder="Please input url" v-model="input">
        <template slot="prepend">Http://</template>
      </ods-input>
      <ods-input class="m-b-10" placeholder="Please select" v-model="input">
        <ods-select v-model="select1" slot="prepend" placeholder="Select">
          <ods-option label="Restaurant" value="1"></ods-option>
          <ods-option label="Order No." value="2"></ods-option>
          <ods-option label="Tel" value="3"></ods-option>
        </ods-select>
      </ods-input>
      <ods-input class="m-b-10" placeholder="Please input url" v-model="input">
        <template slot="append">Http://</template>
      </ods-input>
      <ods-input type="textarea" :rows="2" placeholder="Textarea" v-model="input" />
      <ods-input type="textarea" :rows="2" placeholder="Textarea" readonly value="Texarea Readonly" />

      <h6>Input Search Component</h6>
      <div style="margin-bottom: 16px">
        <ods-input-search
          v-model="searchVal"
          size="hecto"
          placeholder="Buscar aquí"
          @search="handleSearch"
          @change="handleSearchChange"/>
      </div>
      <div>
        <h6><small>Input Search Expandable</small></h6>
        <ods-input-search
          size="exa"
          icon="delete"
          v-model="searchVal"
          expandableSearch
          clearOnClose
          @search="handleSearch"
          @change="handleSearchChange"
          @close="handleSearchClose"/>
      </div>
      <div>
        <h6><small>Input Search line</small></h6>
        <ods-input-search
          size="deci"
          v-model="searchVal"
          outlined
          @change="handleSearchChange"/>
      </div>
      <h6>Input with label</h6>
      <ods-input
        id="input-id"
        class="m-b-10"
        placeholder="Default placeholder"
        v-model="input"
        label="My input label"/>
      <h6>Input type="number"</h6>
      <ods-input
        size="deci"
        type="number"
        class="m-b-10"
        placeholder="Default"
        v-model="num1"/>
      <h6>Input Number Component</h6>
      <ods-input-number
        v-model="numZero"
        controls-position="right"
        zero-empty />
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>KPI</h2>
      <ods-kpi ammount="3.453" unit="%" :percentage="-20" triangle>
        <span slot="title">Título kpi</span>
      </ods-kpi>
      <ods-kpi ammount="15/28" unit="%" :percentage="20" triangle resume="7/20">
        <span slot="title">Título kpi</span>
      </ods-kpi>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Loading</h2>
      <ods-row type="flex">
        <ods-col
          v-loading="loading"
          loading-title="The title"
          loading-description="The description"
          :span="24"
          class="empty-column"/>
      </ods-row>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Logo</h2>
      <ods-logo suite="suite" product="product" product-module=""></ods-logo>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Module</h2>
      <ods-module>
        <div slot="header" class="clearfix" style="position: relative" @click="moduleClick">
          <span>Module Title</span>
          <ods-button style="position: absolute; right: 0; top:5px; padding: 0;" type="text">
            Link Button<ods-icon name="arrow-right" size="16"></ods-icon>
          </ods-button>
        </div>
        <div class="text item" @click="moduleClick">
          Content of module
        </div>
      </ods-module>
    </ods-col>
    <ods-col :xs="24" :sm="12">
      <h2>Pagination</h2>
      <ods-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1800">
      </ods-pagination>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Notification</h2>
      <ods-button
        type="secondary"
        @click="open">
        Notificación
      </ods-button>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Popover</h2>
      <ods-button v-popover:popover>Popover button</ods-button>
      <ods-popover
        ref="popover"
        placement="bottom"
        title="Title"
        width="200"
        trigger="click"
        content="this is content, this is content, this is content">
      </ods-popover>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Progress</h2>
      <ods-progress class="m-b-20" :percentage="80" color="#8e71c7"></ods-progress>
      <ods-progress class="m-b-20" :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></ods-progress>
      <ods-progress type="circle" :percentage="100" status="success"></ods-progress>
      <ods-progress type="circle" :percentage="25"></ods-progress>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Radio</h2>
        <ods-radio v-model="radio" label="1">Option A</ods-radio>
        <ods-radio v-model="radio" label="2">Option B</ods-radio>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Ratio</h2>
      <ods-rate
        class="m-b-20"
        v-model="rate1"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </ods-rate>
      <ods-rate
        v-model="rate2"
        :icon-classes="['icon-smile-frown', 'icon-smile-meh', 'icon-smile-smile']"
        void-icon-class="icon-smile-meh"
        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </ods-rate>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Scrollbar</h2>
      <ods-scrollbar wrapClass="wrap-styles">
        <p>
          <strong> - ODS Scrollbar</strong>
          <small>
          XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input. XHR is a JavaScript. Object Model DOM is a powerful, easy-to-use JavaScript language used in a JavaScript. JSPM is an optimization used in game development, the script accordingly. MVC Framework for Linked Data. Development. Newer and manipulate to ease React Native development framework for a static site generator builder to user interfaces based on other domains. Ionic is a pure JavaScript engines has since been standardized in JavaScript plugins; plugins include autoprefixer, future CSS styles when its Edge browser without plug-ins. Native development of websites employ it is a powerful, easy-to-use JavaScript engine developed and respective standard libraries, the three core technologies of universal isomorphic when its code and Cordova. Universal is a class of any compatible web framework for the top of glossary that will eventually be resolved. Universal is an application more responsive. NoSQL database. A JavaScript code and used to make things accessible to be isomorphic universal module definition for example, on the content production; the type checker, designed for library/framework free JavaScript framework originally created Node. TypeScript is an HTML pages frequently do this strength. Knockout is a high-level, dynamic, untyped, and used with identical input.
          </small>
        </p>
      </ods-scrollbar>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Select</h2>
      <h6>Outlined</h6>
      <ods-select 
        v-model="select1"
        placeholder="Select"
        size="deci"
        selectLabel="My label"
        outlined>
        <ods-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </ods-option>
      </ods-select>
      <h6>Default & disabled</h6>
      <ods-select 
        v-model="select1"
        placeholder="Select"
        size="exa"
        selectLabel="My label">
        <ods-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </ods-option>
      </ods-select>
      <h6>Disabled</h6>
      <ods-select
        v-model="select1"
        disabled
        placeholder="Select"
        size="exa">
        <ods-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ods-option>
      </ods-select>
      <h6>Clearable</h6>
      <ods-select
        v-model="select2"
        clearable
        placeholder="Select"
        size="deci">
        <ods-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ods-option>
      </ods-select>
      <h6>Multiple</h6>
      <ods-select
        v-model="select3"
        multiple
        placeholder="Select"
        size="deci">
        <ods-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ods-option>
      </ods-select>
      <h6>Multiple & Collapse & Clearable</h6>
      <ods-select
        clearable
        v-model="select4"
        multiple
        collapse-tags
        placeholder="Select"
        size="hecto">
        <ods-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ods-option>
      </ods-select>
      <h6>Prefix</h6>
      <ods-select
        clearable
        v-model="select4"
        multiple
        collapse-tags
        placeholder="Select"
        size="deci">
        <template slot="prefix">
          <ods-icon name="search" size="12" />
        </template>
        <ods-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </ods-option>
      </ods-select>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Slider</h2>
        <ods-slider v-model="slider1"></ods-slider>
        <ods-slider v-model="slider2"></ods-slider>
        <ods-slider v-model="slider3" :show-tooltip="false"></ods-slider>
        <ods-slider v-model="slider4" :format-tooltip="formatTooltip"></ods-slider>
        <ods-slider v-model="slider5" disabled></ods-slider>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Steps</h2>
      <ods-steps :active="active" finish-status="success" dots align-center>
        <ods-step title="Paso 1"></ods-step>
        <ods-step title="Paso 2"></ods-step>
        <ods-step title="Paso 3"></ods-step>
      </ods-steps>
      <div class="text-center">
        <ods-button @click="prev" icon="ods-icon-arrow-left" circle size="small"></ods-button>
        <ods-button @click="next" icon="ods-icon-arrow-right" circle size="small"></ods-button>
      </div>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Switch</h2>
      <ods-switch
        class="m-r-20"
        v-model="switch1"
        active-text="Yes"
        inactive-text="No"
        id="switch2"
        labelText="Choose"/>
      <ods-switch
        v-model="switch2"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Yes"
        inactive-text="No"
        id="switch2"/>
    </ods-col>
    <ods-col :xs="24" :sm="12">
      <h2>Table</h2>
      <ods-table
        :row-class-name="tableRowClassName"
        highlight-current-row
        :data="tableData"
        style="width: 100%">
        <ods-table-column
          prop="date"
          label="Fecha"
          width="150">
        </ods-table-column>
        <ods-table-column
          prop="name"
          label="Nombre"
          width="120">
          <template slot-scope="scope">
            <ods-switch
              v-model="scope.name"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </ods-switch>
          </template>
        </ods-table-column>
        <ods-table-column
          prop="state"
          label="Estado"
          width="120">
          <template slot-scope="scope">
            <ods-input-number
              :step="0.1"
              :precision="2"
              v-model="num2"
              controls-position="right"/>
          </template>
        </ods-table-column>
        <ods-table-column
          prop="city"
          label="Ciudad"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="address"
          label="Dirección"
          width="300">
        </ods-table-column>
        <ods-table-column
          prop="zip"
          label="Código postal"
          width="120">
        </ods-table-column>
      </ods-table>
      <h6>Fixed header and fixed left column</h6>
      <ods-table
        :data="tableData"
        style="width: 100%"
        height="200">
        <ods-table-column
          fixed
          prop="date"
          label="Fecha"
          width="150">
        </ods-table-column>
        <ods-table-column
          prop="name"
          label="Nombre"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="state"
          label="Estado"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="city"
          label="Ciudad"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="address"
          label="Dirección"
          width="300">
        </ods-table-column>
        <ods-table-column
          prop="zip"
          label="Código postal"
          width="120">
        </ods-table-column>
      </ods-table>
      <h6>Fixed header and fixed left column and right</h6>
      <ods-table
        :data="tableData"
        height="200"
        style="width: 100%">
        <ods-table-column
          fixed
          prop="date"
          label="Fecha"
          width="150">
        </ods-table-column>
        <ods-table-column
          prop="name"
          label="Nombre"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="state"
          label="Estado"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="city"
          label="Ciudad"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="address"
          label="Dirección"
          width="300">
        </ods-table-column>
        <ods-table-column
          fixed="right"
          prop="zip"
          label="Código postal"
          width="120">
        </ods-table-column>
      </ods-table>
      <h6>Fixed header</h6>
      <ods-table
        :data="tableData"
        style="width: 100%"
        height="200">
        <ods-table-column
          prop="date"
          label="Fecha"
          width="150">
        </ods-table-column>
        <ods-table-column
          prop="name"
          label="Nombre"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="state"
          label="Estado"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="city"
          label="Ciudad"
          width="120">
        </ods-table-column>
        <ods-table-column
          prop="address"
          label="Dirección"
          width="300">
        </ods-table-column>
        <ods-table-column
          prop="zip"
          label="Código postal"
          width="120">
        </ods-table-column>
      </ods-table>
      <h6>Sortable</h6>
        <ods-table
          :data="tableData"
          style="width: 100%">
          <ods-table-column
            prop="date"
            label="Fecha"
            sortable
            width="180">
          </ods-table-column>
          <ods-table-column
            prop="name"
            label="Nombre"
            width="180">
          </ods-table-column>
          <ods-table-column
            prop="address"
            label="Dirección"
            :formatter="formatter">
          </ods-table-column>
        </ods-table>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="12">
      <h2>Tabs</h2>
      <h6>Default</h6>
      <ods-tabs v-model="activeName" @tab-click="handleClick">
        <ods-tab-pane :label="pepe" name="first">User</ods-tab-pane>
        <ods-tab-pane label="Config" name="second">Config</ods-tab-pane>
        <ods-tab-pane label="Role" name="third">Role</ods-tab-pane>
        <ods-tab-pane label="Task" name="fourth">Task</ods-tab-pane>
      </ods-tabs>
      <hr class="m-b-100 m-t-100"/>
      <h6>Type card</h6>
      <ods-tabs type="card" @tab-click="handleClick">
        <ods-tab-pane label="User">User</ods-tab-pane>
        <ods-tab-pane label="Config">Config</ods-tab-pane>
        <ods-tab-pane label="Role">Role</ods-tab-pane>
        <ods-tab-pane label="Task">Task</ods-tab-pane>
      </ods-tabs>
      <hr class="m-b-100 m-t-100"/>
      <h6>Type header</h6>
      <ods-tabs type="header" @tab-click="handleClick">
        <ods-tab-pane label="User">User</ods-tab-pane>
        <ods-tab-pane label="Config">Config</ods-tab-pane>
        <ods-tab-pane label="Role">Role</ods-tab-pane>
        <ods-tab-pane label="Task">Task</ods-tab-pane>
      </ods-tabs>
      <hr class="m-b-100 m-t-100"/>
      <h6>With icons</h6>
      <ods-tabs>
        <ods-tab-pane>
          <span slot="label">
            <ods-icon name="route" size="32" class="m-b-15 ods-d-block"/>
            Route
          </span>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cupiditate eius alias totam molestiae.</p>
          </div>
        </ods-tab-pane>
        <ods-tab-pane>
          <span slot="label">
            <ods-icon name="car" size="32" class="m-b-15 ods-d-block ods-text-center"/>
            Another tab
          </span>
          <div>
            <p>Harum cumque quam suscipit voluptatem beatae a omnis deleniti veniam provident quaerat doloremque, nisi amet hic?</p>
          </div>
        </ods-tab-pane>
      </ods-tabs>
      <h6>With icons</h6>
      <ods-tabs>
        <ods-tab-pane>
          <span slot="label">
            <ods-icon name="route" size="32" class="m-b-15 ods-d-block"/>
            Route
          </span>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cupiditate eius alias totam molestiae.</p>
          </div>
        </ods-tab-pane>
        <ods-tab-pane>
          <span slot="label">
            <ods-icon name="car" size="32" class="m-b-15 ods-d-block ods-text-center"/>
            Another tab
          </span>
          <div>
            <p>Harum cumque quam suscipit voluptatem beatae a omnis deleniti veniam provident quaerat doloremque, nisi amet hic?</p>
          </div>
        </ods-tab-pane>
      </ods-tabs>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Tag</h2>
      <h6>Default</h6>
      <ods-tag
        class="m-l-4 m-r-5"
        :key="tag.name+String(Math.random() * (1000 - 0)).split('.')[1]"
        v-for="tag in tags"
        closable
        :type="tag.type"
        @close="handleCloseTag(tag)">
        {{tag.type}}</ods-tag>
      <h6>Negative</h6>
      <div class="accent-background">
        <ods-tag
          class="m-l-4 m-r-5 is-negative"
          :key="tag.name+String(Math.random() * (1000 - 0)).split('.')[1]"
          v-for="tag in negativeTags"
          closable
          :type="tag.type"
          @close="handleCloseTag(tag)">
          {{tag.type}}</ods-tag>
      </div>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Time picker</h2>
      <h6>Default</h6>
      <ods-time-select
        inputLabel="My super label"
        v-model="timePicker1"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
        placeholder="Select time">
      </ods-time-select>
      <h6>Range</h6>
      <ods-time-picker
        is-range
        v-model="timePicker2"
        range-separator="To"
        start-placeholder="Start time"
        end-placeholder="End time">
      </ods-time-picker>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Tooltip</h2>
      <ods-row>
        <ods-col :xs="24" :sm="12">
          <ods-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">top-start</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">top</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">top-end</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">left-start</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">left</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">left-end</ods-button>
          </ods-tooltip>
          </ods-col>
        <ods-col :xs="24" :sm="12">
          <ods-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">right-start</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">right</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">right-end</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">bottom-start</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">bottom</ods-button>
          </ods-tooltip>
          <ods-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
            <ods-button type="text" class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30">bottom-end</ods-button>
          </ods-tooltip>
        </ods-col>
      </ods-row>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Chart</h2>
      <ods-chart
        type="singleLine"
        :data="{labels: ['label', 'label', 'label'], series: [[{meta: 'valor 1', value: 300}, {meta: 'valor 1', value: 200}, {meta: 'valor 1', value: 400}]]}"
        orientation="horizontal"
        :average="true"
        symbol="kg" />
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>MessageBox</h2>
        <ods-button
          type="text"
          class="p-l-0 p-r-0 m-l-0 m-r-10 m-b-30"
          @click="handlerMessageBox">
          Message Box</ods-button>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Upload</h2>
      <h6>Drag & Drop</h6>
      <ods-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        multiple>
        <i class="ods-icon-upload"/>
        <div
          class="ods-upload__text">Drop files or <em>click here</em> to upload</div>
        <div
          class="ods-upload__tip"
          slot="tip">Max. 20mb  doc/pdf/ppt/xls/jpgs/png</div>
      </ods-upload>
      <h6>Button</h6>
      <ods-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <ods-button
          type="primary">
          Click to upload</ods-button>
        <div
          slot="tip"
          class="ods-upload__tip">
          Max. 20mb  doc/pdf/ppt/xls/jpgs/png</div>
      </ods-upload>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Timeline</h2>
      <ods-timeline :reverse="reverse">
        <ods-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </ods-timeline-item>
      </ods-timeline>
      <h6>Custom</h6>
      <ods-timeline>
        <ods-timeline-item
          v-for="(activity, index) in activities2"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp">
          {{activity.content}}
        </ods-timeline-item>
      </ods-timeline>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="12">
      <h2>Calendar</h2>
      <ods-calendar v-model="calendarValue">
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
          </p>
        </template>
      </ods-calendar>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Carousel</h2>
      <ods-carousel trigger="click" height="150px">
        <ods-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </ods-carousel-item>
      </ods-carousel>
      <h6>Carousel type card</h6>
      <ods-carousel trigger="click" height="150px" type="card">
        <ods-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </ods-carousel-item>
      </ods-carousel>
      <h6>Carousel vertical</h6>
      <ods-carousel trigger="click" height="150px" direction="vertical">
        <ods-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </ods-carousel-item>
      </ods-carousel>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Color Picker</h2>
      <h6>Sizes</h6>
      <ods-color-picker class="m-r-15" v-model="color" />
      <ods-color-picker class="m-r-15" v-model="color" size="medium" />
      <ods-color-picker class="m-r-15" v-model="color" size="small" />
      <ods-color-picker class="m-r-15" v-model="color" size="mini" />
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Divider</h2>
      <h6>Simple</h6>
      <ods-divider/>
      <h6>Custom</h6>
      <ods-divider textBackground="#f9f9fb" content-position="left">Rabindranath Tagore</ods-divider>
      <div class="m-b-75"></div>
      <ods-divider textBackground="#f9f9fb"><i class="ods-icon-central-point"></i></ods-divider>
      <div class="m-b-75"></div>
      <ods-divider textBackground="#f9f9fb" content-position="right">Rabindranath Tagore</ods-divider>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h6>Image component</h6>
      <div class="demo-image">
        <span class="ods-d-block m-b-35" v-for="fit in fits" :key="fit">
          <span class="ods-d-block">{{ fit }}</span>
          <ods-image
            style="width: 200px; height: 200px"
            :src="url"
            :fit="fit"></ods-image>
        </span>
      </div>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <ods-dropdown>
        <span class="ods-dropdown-link">
          Dropdown List<i class="ods-icon-arrow-down ods-icon--right"></i>
        </span>
        <ods-dropdown-menu slot="dropdown">
          <ods-dropdown-item>Action 1</ods-dropdown-item>
          <ods-dropdown-item>Action 2</ods-dropdown-item>
          <ods-dropdown-item>Action 3</ods-dropdown-item>
          <ods-dropdown-item disabled>Action 4</ods-dropdown-item>
          <ods-dropdown-item divided>Action 5</ods-dropdown-item>
        </ods-dropdown-menu>
      </ods-dropdown>
    </ods-col>
  </ods-row>
  <ods-row type="flex" :gutter="24" class="separator">
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Infinite Scroll</h2>
      <h6>Infinite continuous loading</h6>
      <ul
        class="infinite-list"
        v-ods-infinite-scroll="infiniteLoad">
        <li
          v-for="i in count"
          class="infinite-list-item"
          :key="i">
          {{ i }}</li>
      </ul>
      <h6>Infinite not-continuous loading</h6>
      <div class="infinite-list-wrapper">
        <ul
          class="list"
          v-ods-infinite-scroll="infiniteLoad2"
          infinite-scroll-disabled="scrollDisabled">
          <li
            v-for="i in count2"
            class="list-item"
            :key="i">
            {{ i }}</li>
        </ul>
        <!-- <p v-if="scrollLoading">Loading items...</p> -->
        <div
          v-loading="scrollLoading"
          loading-spinner="load"/>
        <p v-if="noMore">No more items</p>
      </div>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="6">
      <h2>Messsage</h2>
      <div class="m-b-25">
        <ods-button type="text" @click="openMessage">Show closable message</ods-button>
      </div>
      <h6>Types</h6>
      <div class="m-b-25">
        <ods-button type="text" @click="openMessage2">success</ods-button>
      </div>
      <div class="m-b-25">
        <ods-button type="text" @click="openMessage3">warning</ods-button>
      </div>
      <div class="m-b-25">
        <ods-button type="text" @click="openMessage4">error</ods-button>
      </div>
    </ods-col>
    <ods-col :xs="24" :sm="12" :lg="12">
      <h2>Transfer</h2>
      <ods-transfer
        v-model="transferValue"
        :data="transferData">
        <div
          class="transfer__item-content"
          slot-scope="{ option }">
          <p>{{ option.id }}</p>
          <p>{{ option.label }}</p>
        </div>
      </ods-transfer>
      <h6>filterable</h6>
      <ods-transfer
        filterable
        :filter-method="transferFilterMethod"
        filter-placeholder="State Abbreviations"
        v-model="transferValue2"
        :data="transferData2">
      </ods-transfer>
    </ods-col>
  </ods-row>
  <ods-backtop
    target=".scrolling-element"
    style="{
      width: auto;
      border-radius: 0;
      padding: 10px;
      font-size: 12px;
      height: auto;
    }">
    <span>Up!!</span>
  </ods-backtop>
</div>
</template>

<script>
/* eslint-disable */
import CSSVars from '../../node_modules/@onesait/onesait-ds/packages/theme-onesait/src/common/var.scss'
export default {
  name: 'play',
  
  data() {
    // form rules
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the age'))
      }
      if (!Number.isInteger(value)) {
        callback(new Error('Please input digits'))
      } else {
        if (value < 18) {
          callback(new Error('Age must be greater than 18'))
        } else {
          callback()
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('Two inputs don\'t match!'))
      } else {
        callback()
      }
    }
    const generateData = _ => {
      const data = []
      const getId = inc => 546789 + inc
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${ i }`,
          disabled: i % 4 === 0,
          id: `J${getId(i)}`
        })
      }
      return data
    }
    const generateStateData = _ => {
      const data = [];
      const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
      const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
      states.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          initial: initials[index]
        });
      });
      return data;
    };
    return {
      searchVal: 'my defalult val',
      // accordion
      activeNames: ['1'],
      // cascader
      cascaderOptions: [
      {
        value: 'guide',
        label: 'Guide',
        children: [{
          value: 'disciplines',
          label: 'Disciplines',
          children: [{
            value: 'consistency',
            label: 'Consistency'
          }, {
            value: 'feedback',
            label: 'Feedback'
          }, {
            value: 'efficiency',
            label: 'Efficiency'
          }, {
            value: 'controllability',
            label: 'Controllability'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'side nav',
            label: 'Side Navigation'
          }, {
            value: 'top nav',
            label: 'Top Navigation'
          }]
        }]
      }, {
        value: 'component',
        label: 'Component',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout'
          }, {
            value: 'color',
            label: 'Color'
          }, {
            value: 'typography',
            label: 'Typography'
          }, {
            value: 'icon',
            label: 'Icon'
          }, {
            value: 'button',
            label: 'Button'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio'
          }, {
            value: 'checkbox',
            label: 'Checkbox'
          }, {
            value: 'input',
            label: 'Input'
          }, {
            value: 'input-number',
            label: 'InputNumber'
          }, {
            value: 'select',
            label: 'Select'
          }, {
            value: 'cascader',
            label: 'Cascader'
          }, {
            value: 'switch',
            label: 'Switch'
          }, {
            value: 'slider',
            label: 'Slider'
          }, {
            value: 'time-picker',
            label: 'TimePicker'
          }, {
            value: 'date-picker',
            label: 'DatePicker'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker'
          }, {
            value: 'upload',
            label: 'Upload'
          }, {
            value: 'rate',
            label: 'Rate'
          }, {
            value: 'form',
            label: 'Form'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table'
          }, {
            value: 'tag',
            label: 'Tag'
          }, {
            value: 'progress',
            label: 'Progress'
          }, {
            value: 'tree',
            label: 'Tree'
          }, {
            value: 'pagination',
            label: 'Pagination'
          }, {
            value: 'badge',
            label: 'Badge'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert'
          }, {
            value: 'loading',
            label: 'Loading'
          }, {
            value: 'message',
            label: 'Message'
          }, {
            value: 'message-box',
            label: 'MessageBox'
          }, {
            value: 'notification',
            label: 'Notification'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu'
          }, {
            value: 'tabs',
            label: 'Tabs'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb'
          }, {
            value: 'dropdown',
            label: 'Dropdown'
          }, {
            value: 'steps',
            label: 'Steps'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog'
          }, {
            value: 'tooltip',
            label: 'Tooltip'
          }, {
            value: 'popover',
            label: 'Popover'
          }, {
            value: 'card',
            label: 'Card'
          }, {
            value: 'carousel',
            label: 'Carousel'
          }, {
            value: 'collapse',
            label: 'Collapse'
          }]
        }]
      }, {
        value: 'resource',
        label: 'Resource',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'docs',
          label: 'Design Documentation'
        }]
      }],
      selectedOptions: [],
      // checkbox
      checked: true,
      // datepicker
      datepickerA: new Date(),
      datepickerB: '',
      datepickerC: '',
      datepickerD: '',
      datepickerE: '',
      pickerOptions: {
        shortcuts: [{
          text: 'Last week',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last month',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last 3 months',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      specialDates: [
        [new Date('June 15, 2019'), 'my-a-class'],
        [new Date('June 25, 2019'), 'my-b-class']
      ],
      // datetime
      pickerOptions1: {
        shortcuts: [{
          text: 'Ahora',
          onClick(picker) {
            picker.$emit('pick', Date.now())
          }
        },{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      pickerOptions2: {
        shortcuts: [{
          text: 'Today',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: 'Yesterday',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: 'A week ago',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      // dialog
      dialogVisible: false,
      dialogVisible2: false,
      // input
      input: '',
      num1: 0,
      num2: 0,
      numZero: 0,
      // loading
      loading: true,
      // pagination
      currentPage: 3,
      // form data
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'change' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'change' }
        ],
        age: [
          { validator: checkAge, trigger: 'change' }
        ]
      },
      // radio
      radio: '1',
      // rate
      rate1: null,
      rate2: null,
      // select
      options: [{
        value: 'Option1',
        label: 'TODOS'
      }, {
        value: 'Option2',
        label: 'Option2',
        disabled: true
      }, {
        value: 'Option3',
        label: 'MEDIOAMBIENTE Y METEOROLOGÍA'
      }, {
        value: 'Option4',
        label: 'Option4'
      }, {
        value: 'Option5',
        label: 'Option5'
      }],
      select1: '',
      select2: '',
      select3: [],
      select4: [],
      // slider
      slider1: 0,
      slider2: 50,
      slider3: 10,
      slider4: 70,
      slider5: 20,
      // steps
      active: 0,
      // switch
      switch1: true,
      switch2: false,
      // table
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        status: 0
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        status: 3
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        status: 2
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        status: 0
      }, {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        status: 1
      }, {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        status: 3
      }, {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        status: 0
      }],
      // tabs
      activeName: 'second',
      pepe: 'Luis',
      // tags
      tags: [
        { name: 'Tag 1', type: 'primary' },
        { name: 'Tag 1', type: 'secondary' },
        { name: 'Tag 2', type: 'success' },
        { name: 'Tag 3', type: 'info' },
        { name: 'Tag 4', type: 'warning' },
        { name: 'Tag 5', type: 'danger' }
      ],
      negativeTags: [
        { name: 'Tag 1', type: 'primary' },
        { name: 'Tag 1', type: 'secondary' }
      ],
      // timepicker
      timePicker1: '',
      timePicker2: '',
      //upload
      fileList: [
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      ],
      // timeline
      reverse: true,
      activities: [{
        content: 'Event start',
        timestamp: '2018-04-15'
      }, {
        content: 'Approved',
        timestamp: '2018-04-13'
      }, {
        content: 'Success',
        timestamp: '2018-04-11'
      }],
      activities2: [{
        content: 'Custom icon',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'ods-icon-more'
      }, {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        content: 'Custom size',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: 'Default node',
        timestamp: '2018-04-03 20:46'
      }],
      // calendar
      calendarValue: new Date(),
      // color picker
      cssVariables: CSSVars,
      initialColor: null,
      // image
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      count: 0,
      count2: 10,
      scrollLoading: false,
      // transfer
      transferValue: [1, 4],
      transferData: generateData(),
      transferValue2: [1, 4],
      transferData2: generateStateData(),
      
    }
  },

  computed: {
    // color picker
    color: {
      get () {
        return !this.initialColor ? this.cssVariables.primaryColor : this.initialColor
      },
      set (newVal) {
        this.initialColor = newVal
      }
    },
    //infinite scroll
    noMore () {
      return this.count2 >= 30
    },
    scrollDisabled () {
      return this.scrollLoading || this.noMore
    }
  },

  methods: {
    transferFilterMethod(query, item) {
      console.log(query, item)
      return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
    },
    openMessage() {
      this.$message({
        message: 'This is a message.',
        showClose: true
      })
    },
    openMessage2() {
      this.$message({
        message: 'Congrats, this is a success message.',
        type: 'success'
      });
    },

    openMessage3() {
      this.$message({
        message: 'Warning, this is a warning message.',
        type: 'warning'
      });
    },

    openMessage4() {
      this.$message.error('Oops, this is an error message.');
    },
    handlerMessageBox () {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    },
    handleSearch (val) {
      console.log('search', val)
    },
    handleSearchChange (val) {
      console.log('v-model change', this.searchVal)
      console.log('change', val)
    },
    handleSearchClose () {
      console.log('close', this.searchVal)
    },
    moduleClick () {
      console.log('module click')
    },
    handleChange(val) {
      console.log(val);
    },
    handleClose() {
      console.log('close')
    },
    open () {
      this.$notify({
        title: 'Mi título',
        message: 'Notificación básica que se cierra en 4500ms',
        duration: 0,
        type: 'success'
      })
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    } ,
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    formatTooltip(val) {
      return val / 100;
    },
    next() {
      if (this.active++ > 2) this.active = 0
    },
    prev() {
      this.active --
      if (this.active < 0) this.active = 0
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleCloseTag (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    tableRowClassName({row, rowIndex}) {
      return `ods-table__row--${
          row.status === 0 ? 'success'
          : row.status === 1 ? 'warning'
          : row.status === 2 ? 'danger'
          : row.status === 3 ? 'info'
          : ''
      }`
    },
    formatter(row, column) {
      return row.address
    },
    // upload
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfer of ${ file.name } ?`)
    },
    // infinite loading
    infiniteLoad () {
      this.count += 2
    },
    infiniteLoad2 () {
      this.scrollLoading = true
      setTimeout(() => {
        this.count2 += 4
        this.scrollLoading = false
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
  h2, 
  h6 {
    display: block;
    font-weight: bold;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }

  h6 {
    font-size: 0.67em;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
  }

  /deep/ strong {
    display: block;
    border-bottom: 1px dotted;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }

  .container {
    background: #f9f9fb;
    min-height: 100vh;
    padding: 24px 48px 72px;
    @media screen and (max-width:767px) {
      padding: 24px 16px 72px;
    }
  }
  .separator {
    margin-bottom: 35px;
    padding-bottom: 65px;
    border-bottom: 1px dotted rgb(215, 215, 215);
    @media screen and (max-width: 767px) {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
  .empty-column {
    height: 300px;
    background: rgb(223, 223, 223);
  }
  h2 {
    @media screen and (max-width: 767px) {
      margin-top: 64px;
    }
  }
</style>

<style lang="scss">
html, body {
  font-family: 'Soho', Helvetica, Arial, sans-serif!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: none;
  margin: 0;
  // scrollbar
  .wrap-styles {
    height: 195px;
    background: #e4ecf2;
    border-radius: 8px;
    padding: 10px;
    strong {
      display: block;
      border-bottom: 1px dotted;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
  }
}

.accent-background {
  background: #193b47;
  padding: 24px;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}

.flex-container {
  display: flex;
  &.space-between {
    justify-content: space-between;
  }
  &.space-around {
    justify-content: space-around;
  }
  &.space-evenly {
    justify-content: space-evenly;
  }
  &.wrap {
    flex-wrap: wrap;
  }
  &.flex-column {
    flex-direction: column;
    &--reverse {
      flex-direction: column-reverse;
    }
  }
  &.align-center {
    align-items: center;
  }
}

.text-center {
  text-align: center
}

$spaceamounts: (0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100); // Adjust this to include the pixel amounts you need.
$sides: (top, bottom, left, right); // Leave this variable alone

@each $space in $spaceamounts {
  @each $side in $sides {
    .m-#{str-slice($side, 0, 1)}-#{$space} {
      margin-#{$side}: #{$space}px !important;
    }
  
    .p-#{str-slice($side, 0, 1)}-#{$space} {
      padding-#{$side}: #{$space}px !important;
    }
  }
}

/* .ods-tabs__item {
  padding: 0 60px 10px !important;
} */
/* .ods-tabs--top .ods-tabs__item.is-top:nth-child(2) {
  padding-left: initial !important;
}
.ods-tabs--top .ods-tabs__item.is-top:last-child {
  padding-right: initial !important;
} */


$displays: (block, inline, inline-block, flex, none);
@each $display in $displays {
  .ods-d-#{$display} {
    display: #{$display} !important;
  }
}


$aligns: (left, right, center, justify);
@each $align in $aligns {
  .ods-text-#{$align} {
    text-align: #{$align} !important;
  }
}

.ods-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.ods-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.ods-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.scrolling-element {
  height: 100vh;
  overflow: auto;
}

.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
  }
}

.infinite-list-wrapper {
  height: 300px;
  overflow: auto;
  text-align: center;
  .list {
    padding: 0;
    margin: 0;
    list-style: none;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #fff6f6;
      color: #ff8484;
    }
    .list-item+.list-item {
      margin-top: 10px;
    }
  }
}

.transfer__item-content {
  height: 44px;
  line-height: 16px;
}
</style>

