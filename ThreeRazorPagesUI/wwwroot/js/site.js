// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function torusKnot(THREE) {
    return new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.5, 0.05, 300, 20, 2, 5),
        new THREE.MeshPhongMaterial({ color: 0x219EBC })
    );
}

function cube(THREE) {
    return new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshPhongMaterial({ color: 0x219EBC })
    );
}
function doda(THREE) {
    return new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.8, 0),
        new THREE.MeshPhongMaterial({ color: 0x219EBC })
    );
}

$.when(
    $.ajax("js/three.js")
).then(function () {
    //LIGHTS
    const hemisLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 2);

    //CAMERA
    const camera = new THREE.OrthographicCamera(
        window.innerWidth / - 50,
        window.innerWidth / 52,
        window.innerHeight / 50,
        window.innerHeight / - 50,
        -500,
        1000
    );
    camera.zoom = 24;

    //Object
    const sceneObjectTorusKnot = torusKnot(THREE);
    const sceneObjectCube = cube(THREE);
    const sceneObjectDoda = doda(THREE);
    sceneObjectTorusKnot.position.z = 1000;
    sceneObjectDoda.position.z = 1000;

    //SCENE
    const scene = new THREE.Scene();
    scene.add(camera);
    scene.add(sceneObjectTorusKnot);
    scene.add(sceneObjectCube);
    scene.add(sceneObjectDoda);
    scene.add(hemisLight);
    scene.background = new THREE.Color(0xFFB703);

    //RENDERERS
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: $(".threejs-container")[0] });
    renderer.setPixelRatio(window.devicePixelRatio);

    const back = new THREE.Vector3(0, 0, 1000);
    const forth = new THREE.Vector3(0, 0, 0);

    $("#patriarch").click(function () {
        sceneObjectDoda.position.lerp(forth, 1);
        sceneObjectTorusKnot.position.lerp(back, 1);
        sceneObjectCube.position.lerp(back, 1);

        $(".heading-text").html("Patriarch");
        $(".description-text").html("Husbands to duty, they unrolled their plans across billiard tables and vehicle bonnets, regrouped at breakfast.What their secrets were was everyone’s guess and nobody’s business.");
    });
    $("#descendant").click(function () {
        sceneObjectDoda.position.lerp(back, 1);
        sceneObjectTorusKnot.position.lerp(forth, 1);
        sceneObjectCube.position.lerp(back, 1);

        $(".heading-text").html("Descendant");
        $(".description-text").html("The joyful frogs occupied my pond, To orchestrate their vocal prowess, They taught me to take blind leaps, Like lightning bouncing in the skies");
    });
    $("#pneuma").click(function () {
        sceneObjectDoda.position.lerp(back, 1);
        sceneObjectTorusKnot.position.lerp(back, 1);
        sceneObjectCube.position.lerp(forth, 1);

        $(".heading-text").html("Pneuma");
        $(".description-text").html("Breath and spirit are one. This I know with my ear pressed to the phone, smiling at a crackle on the line – your slow exhale");
    });

    function animate() {
        const canvas = renderer.domElement;

        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        sceneObjectDoda.rotation.x += 0.001;
        sceneObjectDoda.rotation.y += 0.001;
        sceneObjectTorusKnot.rotation.x += 0.001;
        sceneObjectTorusKnot.rotation.y += 0.001;
        sceneObjectCube.rotation.x += 0.001;
        sceneObjectCube.rotation.y += 0.001;

        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.render(scene, camera);

        requestAnimationFrame(animate);
    }
    animate();
}, function (error) {
    alert(JSON.stringify(error));
});

$(document).ready(function () {
    $(".button-container").hover(function () {
        $(this).css("width", "320px");
    }, function () {
        $(this).css("width", "256px");
    });
    $(".help-container").hover(function () {
        $(this).css("padding", "20px");
    }, function () {
        $(this).css("padding", "10px");
    });
});


    //TEXT
    //const labelText = new CSS2DRenderer.CSS2DObject($("<div>Object goes here</div>").addClass("label"));
    //labelText.position.set(0, cube.height, 0);
    //cube.add(labelText);
//const labelRenderer = new CSS2DRenderer.CSS2DRenderer();
    //labelRenderer.setSize(window.innerWidth, window.innerHeight);
    //labelRenderer.domElement.style.position = 'absolute';
    //labelRenderer.domElement.style.top = '0px';

    //const label = labelRenderer.domElement;
        //labelRenderer.setSize(window.innerWidth, window.innerHeight);
        //labelRenderer.render(scene, camera);