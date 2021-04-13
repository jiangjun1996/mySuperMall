<template>
  <div>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      @check="handleCheck"
    >
    </el-tree>
  </div>
</template>

<script>
import * as THREE from "three"; //ES6

// 创建场景
var scene = new THREE.Scene();
// 创建透视相机
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 创建一个 WebGL 渲染器    默认情况下为黑色场景，此处设置为透明（即白色场景）
var renderer = new THREE.WebGLRenderer({ alpha: true });
var geometry = new THREE.BoxGeometry(2, 2, 2);
// 创建一个长宽高都为1个单位的立方体
var material = new THREE.MeshBasicMaterial({ color: "#33FFDD" });
// 创建材质，对光照无感
var cube = new THREE.Mesh(geometry, material);
// 创建一个立方体网格（mesh）,将材质包裹在立方体上
scene.add(cube);
// 设置渲染器为全屏
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
// 添加到网页中
document.body.appendChild(renderer.domElement);

// 将立方体网格添加到场景中
camera.position.z = 3;
// 指定相机位置
function render() {
  // 让浏览器执行参数中的函数，不断循环（浏览器一个新的API）
  requestAnimationFrame(render);

  // 结合场景和相机进行渲染，即用摄像机拍下此刻的场景
  renderer.render(scene, camera);

  //使图形运动
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}
render();

export default {
  name: "tree",
  data() {
    return {
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleCheck(a, b) {
      console.log("handleCheck", a, b);
    },
  },
};
</script>

<style>
</style>