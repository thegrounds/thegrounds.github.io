(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
  width: 938,
  height: 151,
  fps: 34,
  color: "#FFFFFF",
  manifest: [
    {src:"img/bg2.png", id:"bg2"},
    {src:"img/sunset.png", id:"sunset"}
  ]
};

// stage content:
(lib.footer2 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_0 = function() {
    /* Stop at This Frame
    The  timeline will stop/pause at the frame where you insert this code.
    Can also be used to stop/pause the timeline of movieclips.
    */

    this.stop();
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45));

  // rides silo
  this.instance = new lib.bg2();
  this.instance.setTransform(0,45);

  this.shape = new cjs.Shape();
  this.shape.graphics.f("#333333").s().p("EhJfAEEIAAoHMCS/AAAIAAIHg");
  this.shape.setTransform(469.5,126);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},44).wait(1));

  // flags
  this.instance_1 = new lib.flag4();
  this.instance_1.setTransform(577.9,77.9,0.817,0.817,0,0,0,1.1,39.3);

  this.instance_2 = new lib.flag3();
  this.instance_2.setTransform(592.1,73.3,0.729,0.729,0,0,0,1.1,39.3);

  this.instance_3 = new lib.flag();
  this.instance_3.setTransform(585,61.1,1,1,0,0,0,1.1,39.3);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(45));

  // wheel animation
  this.instance_4 = new lib.cars();
  this.instance_4.setTransform(345,79.5,1,1,0,0,0,-166.3,-120.7);

  this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},44).wait(1));

  // base
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f().s("#403E40").ss(7,1,1).p("AKZAAQAAEUjDDCQjDDDkTAAQkSAAjDjDQjDjCAAkUQAAkSDDjEQDDjCESAAQETAADDDCQDDDEAAESg");
  this.shape_1.setTransform(411.1,76.2);

  this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},44).wait(1));

  // Layer 11
  this.instance_5 = new lib.sunset();
  this.instance_5.setTransform(0,39.5);

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367,74.5,1228,153);


// symbols:
(lib.bg2 = function() {
  this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,940,75);







(lib.sunset = function() {
  this.initialize(img.sunset);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,940,59);


(lib.railnew = function() {
  this.initialize();

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#333333").s().p("Apbk+IAgg1ISWKyIgfA1g");
  this.shape.setTransform(60.4,37.3);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120.8,74.5);


(lib.flag4 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_93 = function() {
    this.gotoAndPlay(0);
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(93).call(this.frame_93).wait(3));

  // Layer 2
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#333333").s().p("AgsAcQgVgLABgDIAEABQASADARgRQApgpAVADQASADAKAAIAAAxIgPgEQgQgEgGAEQgFADgOATQgIAFgJAAQgPAAgVgKg");
  this.shape.setTransform(-6.6,6);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#333333").s().p("AgpAeIgBAAQgTgJgDgEIAFAAQAGAAAFgCQAJgEAJgHIADgDIAYgTQASgPAOgCIAHAAQAMABAIAAIAIgBIAAABIABAwIgHAAIgGgBIgCAAQgNgCgIACQgFACgJAJIgGAGQgJAFgLABIgFAAQgMAAgNgGg");
  this.shape_1.setTransform(-6.3,5.9);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#333333").s().p("AgoAhIgBAAQgRgHgFgFIAEgBQAGgBAFgDQAJgFAHgHIADgDIAYgSQARgNAPgCIAIgBQAMABAIgBIAIgCIAAABIABAwIgEABIgGAAIgDABQgMgCgJACQgFABgKAGIgHAEQgIAEgLADQgGACgGAAQgIAAgJgDg");
  this.shape_2.setTransform(-6.1,5.8);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#333333").s().p("AgnAjIgBAAQgOgFgJgGIAFgCQAFgCAFgEIAPgMIADgCIAYgSQAQgMAQgCIAIgBQANAAAHgCIAIgCIAAAAIACAwIgDADIgFABIgDABIgVAAQgHABgKADIgHACQgJADgKAFQgJAEgJAAIgKgBg");
  this.shape_3.setTransform(-5.8,5.7);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#333333").s().p("AgmAlIgBAAQgLgDgMgHIAFgDIAJgIIANgMIADgDIAYgQQAQgLARgCIAJgBQAMgBAGgDIAIgDIAAAAIADAvIgBAGQgBABgEABIgCABIgWAAIgSAAIgIABQgIACgKAGQgLAIgLAAIgFAAg");
  this.shape_4.setTransform(-5.6,5.7);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#333333").s().p("AglAmQgJAAgQgJQAGgEAHgJQAHgJAFgEIAbgSQAPgKASgCQAUgBAIgFIAIgFIAEA3QgBADgGABQgOAEgbgHQgPgDgLALQgNANgMAAIgBgBg");
  this.shape_5.setTransform(-5.3,5.7);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#333333").s().p("AglAlIgBAAQgJgCgOgIQAHgEAGgIIAHgHIAFgGIAJgDIATgMIAIgGQAMgGALgBIADgBQARgCAIgEIAFgCIADgBIADAzIAAACQgCADgGACQgLADgWgEIgGgBQgKgBgGAEIgKAFQgLAJgMAAIgDAAg");
  this.shape_6.setTransform(-5.4,5.7);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#333333").s().p("AglAjIgBAAQgJgCgNgJQAHgDAGgHIAHgHIAGgGIAIgDIAUgKIAIgGQAMgGAKgCIACgBQAQgCAJgEIAFgBIACgBIADAyIgBADQgBADgGABQgMAEgUgDIgGgBQgKgBgGAEIgKAFQgJAGgKAAIgHgBg");
  this.shape_7.setTransform(-5.4,5.7);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#333333").s().p("AglAhIgBAAQgKgDgLgIQAHgDAHgHIAHgGIAFgGQAFgBADgBIAVgJIAIgGQAMgHAJgCIACgBIAZgGIAEgBIACABIACAxIgBACQgCADgFABQgMAEgUgCIgFgBQgJAAgGAFIgLADQgHAEgIAAIgLgCg");
  this.shape_8.setTransform(-5.5,5.7);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#333333").s().p("AglAgIgBgBQgKgDgKgIQAIgDAGgGIAHgGIAGgFQAEgCAEgBIAVgHIAIgGQALgIAIgCIADgBIAYgFIAFgBIABABIABAwIgCADQgCACgFABQgLAEgTgBIgFAAQgJAAgGAFIgLADQgFABgFAAQgHAAgJgCg");
  this.shape_9.setTransform(-5.6,5.8);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#333333").s().p("AglAeIgCgBQgJgEgJgIQAIgDAGgEIAIgHIAFgDQAFgDADgBQAOgCAIgEIAIgFQALgJAHgCIACgBQANgEALgCIAFAAIAAACIABAvIgCADIgHADQgLAEgSAAIgFAAQgJABgGAFQgEACgGAAIgFAAQgJAAgNgEg");
  this.shape_10.setTransform(-5.7,5.8);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#333333").s().p("AgnAaQgJgEgIgJQAOgDAIgJQAIgGAGAAQAUgBAJgJQAQgMAEgCQAOgFAOAAIAAAyQgNAKgYAAQgLABgJAGIgGACQgMAAgVgJg");
  this.shape_11.setTransform(-5.8,6);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#333333").s().p("AgmAbQgKgDgJgHQAOgEAIgJQAEgEAEgBIAFgDQANgBAJgEIAIgFIASgKIADgCIAJgEQAJgDAKAAIABAAIAAAyIgHAGIgKACIgTACIgFAAQgIACgJAEIgHABQgMAAgTgHg");
  this.shape_12.setTransform(-5.7,5.7);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#333333").s().p("AgmAcQgKgCgKgFQANgGAIgJIAIgGIAFgCIAYgHIAHgEIATgJIADgCIAJgFQAJgDALAAIAAAAIABAyIgGAHIgKABIgTABIgFAAQgJACgJADIgJABQgMAAgSgFg");
  this.shape_13.setTransform(-5.6,5.5);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#333333").s().p("AglAeQgLgCgLgEQANgHAIgIIAIgIIAFgCIAYgHIAHgEIAUgIIADgCIAJgFQAJgFALAAIAAAAIACA0IgEAIIgKgBIgVAAIgFAAQgJACgJADIgMABQgMAAgPgDg");
  this.shape_14.setTransform(-5.5,5.3);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#333333").s().p("AglAfQgLgBgLgCQAMgJAIgIIAHgIIAFgDQALgFANgDIAIgDIAVgHIADgCIAJgGQAJgFALAAIAAAAIACA0IgCAJIgKgCQgKgCgLABIgFABIgTADIgRABIgXgBg");
  this.shape_15.setTransform(-5.5,5.1);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#333333").s().p("AgkAgIgYgBIATgSIAIgIIAFgFQAJgFAPgDIAIgCQAQgEAGgCIADgCIAJgHQAJgGALAAIABAAIACA1IAAAKQgEgCgGgCQgLgCgLABIgGAAIgTADQgOACgRAAIgJAAg");
  this.shape_16.setTransform(-5.4,4.9);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#333333").s().p("AgjAFQAJgLAUgDQAYgEAIgDIAMgKQAIgGAMAAIAFBAQgEgDgGgCQgNgEgQADIhVAHQASgTAIgJg");
  this.shape_17.setTransform(-5.2,4.9);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#333333").s().p("Ag9AhIALgLIAJgLIAGgHQALgLASgDQAXgFAIgDIABAAIAMgIIAFgDQAGgDAGAAIADAAIAEA0IgBALQgEgDgGgBQgMgEgMACIgEABIgXAEQgQACgTAAIgQABIgKAAg");
  this.shape_18.setTransform(-5.2,5);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#333333").s().p("AgkAhQgLABgOgCQAHgGAEgFIAKgLIAGgHQALgLARgEIAegJIACAAIALgGIAGgDQAHgCAFgBIADABIAEA0IgEAIIgKgDQgLgCgMABIgDACIgWAFQgMADgPAAIgJgBg");
  this.shape_19.setTransform(-5.2,5.1);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#333333").s().p("AglAiQgKAAgOgEQAIgFAEgFIAJgMIAGgGQAMgLAPgFQAUgIAKgCIACAAIAMgEIAGgDIAMgDIACACIAFAzIgGAGIgKgCQgMgBgLABIgDACQgLACgJAFQgLADgMAAIgOgBg");
  this.shape_20.setTransform(-5.1,5.3);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#333333").s().p("AgmAiQgJgBgNgFQAHgFAEgFIAKgLIAGgHQAMgLAOgGQASgJALgBIADAAIAMgDIAFgCIANgDIABACIAGAzIgIAEIgLgBQgMgBgKACIgDACQgKACgJAGQgJAEgMAAIgQgCg");
  this.shape_21.setTransform(-5.1,5.5);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#333333").s().p("AgnAjQgIgCgNgHQAIgEAEgFIAJgMIAGgFQANgMANgHQARgLALAAIADAAIANgBIAFgCIANgDIABADIAFAyIgKACIgKAAQgNAAgIACIgEACQgJADgJAHQgIAEgLAAQgIAAgKgCg");
  this.shape_22.setTransform(-5,5.7);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#333333").s().p("AgoAjQgHgCgNgIQAJgFADgFIAKgMQAngnAXADQAHABALgCIANgDIAGA2QgcgBgPAEQgKADgLALQgHAEgLAAQgIAAgLgDg");
  this.shape_23.setTransform(-5,5.9);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#333333").s().p("AgkAkIgDgBQgIgDgOgHIAJgHIADgDQAHgKADgCIAGgDIAYgTQAQgQARADIAAAAQAHABALgCIADgBIALgCIAAADIAGAyIgEABQgZAAgOACIgIADQgIACgGAIQgHAEgLAAQgGAAgJgBg");
  this.shape_24.setTransform(-5,5.9);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#333333").s().p("AgjAjIgEgBQgJgCgNgHIAIgIIADgDQAHgJAEgCIAGgDQANgHALgMQAOgQATAEIAAAAQAHABAMgDIADgBIAKgCQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAFAyIgDACIgoACIgHACQgJABgGAIQgHAFgLAAQgGAAgIgCg");
  this.shape_25.setTransform(-5.1,5.9);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#333333").s().p("AgjAjIgEgBQgKgDgNgFIAHgJIAEgDQAGgJAFgCIAHgDQANgEALgOQANgRAUAEIAAAAQAHABAMgCIAEgBIAKgCQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAFAzIgDADIgoAAIgHABQgKABgGAIQgGAFgLAAQgHAAgIgBg");
  this.shape_26.setTransform(-5.1,5.9);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#333333").s().p("AgjAiIgDgBIgYgHIAGgKIADgDQAHgIAGgCIAHgCQANgCALgRQALgRAWAFIABAAQAGABAMgDIAFgBIAKgCQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAEAzIgBAEIgpAAIgHAAQgLAAgGAJQgGAFgLAAIgPgCg");
  this.shape_27.setTransform(-5.2,5.9);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#333333").s().p("AgjAiIgDgBIgZgHQACgFAEgFIADgDQAGgIAHgCIAHgBQAOgCALgRQAJgSAYAGIABAAQAGABANgDIAEgBIAKgCQABgBAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAEA0IgBAFQgVAAgUgCIgIAAQgMgBgFAJQgFAFgMAAIgPgBg");
  this.shape_28.setTransform(-5.2,5.9);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#333333").s().p("AgjAiIgcgHQABgGAEgGQAJgMAPAAQAOgBALgSQAJgSAYAGQAGABATgFQAOgEgCAEIADA5QgXABgagEQgNgCgFAJQgEAGgNAAIgPgBg");
  this.shape_29.setTransform(-5.3,5.8);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#333333").s().p("AgcAiIgGgBIgdgIQACgFAEgFIAGgGQAIgGAKgCIADgBQALgCAMgPIACgDQALgNAUAEIABAAQAHABARgEIADgBQAJgBgCADIADAtIgBAKQgQACgPgCIgRgCQgIgBgGADIgEAFQgFAFgLABIgJgBg");
  this.shape_30.setTransform(-5.5,5.9);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#333333").s().p("AgdAhIgGgBIgbgHIAGgKIAGgFQAIgHAKgDIADAAQAKgEANgOIACgCQAPgMAQAEIABAAIAYgEIADgBQAIAAgCAEIACAsIgCAIQgRADgOgBIgQgCQgIAAgGADIgDAEQgFAEgLAAIgKgBg");
  this.shape_31.setTransform(-5.6,5.9);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#333333").s().p("AgdAhIgGgBQgOgDgNgFIAHgJIAHgFQAHgGAJgEIADgBIAYgRIACgCQATgKANACIAAAAIAYgEIAEgBQAGACgCAEIACAqIgEAIQgRAEgNgBIgQgCQgHAAgGADIgEAEQgFADgJAAIgLgBg");
  this.shape_32.setTransform(-5.8,5.9);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#333333").s().p("AgeAhIgGgBQgNgEgNgFIAIgIIAHgFIAQgLIACgCQAJgHAQgIIACgCQAXgJAJABIABAAIAXgFIAFAAQADADgBAEIABAqIgFAGQgSAFgMgBIgPgBQgHAAgFADIgEADQgFADgIAAIgNgBg");
  this.shape_33.setTransform(-5.9,5.9);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#333333").s().p("AgfAgIgFgBQgOgDgLgGIAIgHIAHgEIAQgNIACgCQAHgIASgHIADgBQAZgIAHAAIAAAAQALgDANgCIAEAAQACAEAAAFIAAAoIgHAFQgTAHgKgBQgIgBgHAAQgGABgFADIgFACQgEACgHAAIgPgCg");
  this.shape_34.setTransform(-6.1,5.9);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#333333").s().p("AgfAgQgQgDgOgIIAQgKQAJgHAIgKQAHgKAVgEIAhgIQAOgFAPAAIAAAyQgaAMgMgCQgNgCgLAGQgFADgKAAQgHAAgJgCg");
  this.shape_35.setTransform(-6.2,5.9);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#333333").s().p("AgiAgQgTgFgJgGQANgHAGgFQAKgJAJgKQAJgKASgDIAigGQANgEANAAIgBAzQgaAJgMgBQgNgBgLAHQgGACgIAAQgIAAgMgCg");
  this.shape_36.setTransform(-6.1,5.9);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#333333").s().p("AgkAfQgWgHgFgEQAOgFAJgIQALgJAJgLQALgMARgBIAggEQAMgDAMgBIgBA2QgbAFgNAAQgNAAgLAHQgFADgIAAQgJAAgNgEg");
  this.shape_37.setTransform(-6,6);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#333333").s().p("AgmAfQgagJAAgCQAPgFALgKIAWgWQAMgMARgBIAfgBQAKgDALAAIgCA3IgoADQgNABgLAIQgFACgIAAQgKAAgOgEg");
  this.shape_38.setTransform(-5.9,6);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#333333").s().p("AgoAeQgdgKAEgBQARgEAMgMIAYgYQAMgNARABIAeAAIAUgCIgDA5QgcgCgNADQgNACgMAJQgFACgHAAQgLAAgPgGg");
  this.shape_39.setTransform(-5.8,6.1);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#333333").s().p("AgqAeQgggMAIABQASgDAPgPIAagZQAOgOAQACQARACALAAIASgBIgEA7QgdgFgNADQgNADgMAKQgFACgGAAQgMAAgRgHg");
  this.shape_40.setTransform(-5.7,6.1);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#333333").s().p("AgrAgQgjgPAMADQATgCARgRQASgSAKgJQAPgPAPAEQAOAEAOAAIAPgBIgEA9QgegJgOAFQgMAEgMAKQgFACgHAAQgMAAgSgHg");
  this.shape_41.setTransform(-5.7,6);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#333333").s().p("AgqAgIgGgDQgagKAHACQAUgDAQgQIAFgDIATgWIADgDQAOgOARACIALACIAQABIAJAAIAGAAQABAFgBAFIgCAzIgFgBIgSgEQgMgCgHACQgGACgHAEIgMAJIgDACIgKABQgMAAgRgHg");
  this.shape_42.setTransform(-5.7,6.1);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#333333").s().p("AgoAhIgHgDIgVgIQAUgDARgQIAFgDIASgWIADgDQANgOARABIAMABIAPABIAJAAIAGAAQADAFgCAFIAAAyIgEABIgSgFQgMgCgHACQgHACgGAEIgOAKIgCABQgFACgGAAQgLAAgQgGg");
  this.shape_43.setTransform(-5.8,6.2);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#333333").s().p("AgmAiIgHgDIgXgIQAUgEARgPIAEgEIASgWIADgCQALgNATgBIALAAIAQABIAJAAIAGAAQAEAFgCAFIABAyIgDACIgSgFQgLgCgIACQgHABgGAEIgPAKIgBACQgFACgHAAQgLAAgPgFg");
  this.shape_44.setTransform(-5.8,6.2);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#333333").s().p("AgkAjIgIgCIgYgJQAUgEAQgOIAFgFQALgOAGgIIACgCQALgMAUgDIALAAIAQAAIAJABIAFAAQAGAEgCAFIABAyIgCAEIgRgGQgLgCgJABQgGABgGAEIgPALIgDACQgEADgJAAQgKAAgNgFg");
  this.shape_45.setTransform(-5.8,6.2);

  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#333333").s().p("AgjAlIgHgDIgbgIQAVgEAQgOIAEgFQALgOAGgIIACgDQAJgLAWgFIAKgBQAHgBAJABIAJABIAGABQAHADgDAFIADAyIgBAGQgIgEgKgDQgKgDgJACQgHABgGADIgOAMIgEACQgFADgJAAQgKAAgMgDg");
  this.shape_46.setTransform(-5.9,6.2);

  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#333333").s().p("AgoAkIgdgIQAYgGARgRIAQgXQALgOAfgHQALgCAPADQAPADgEAFIADA5QgHgEgKgDQgUgFgMAIIgSAOQgGAEgKAAQgMAAgPgFg");
  this.shape_47.setTransform(-5.9,6.2);

  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#333333").s().p("AgoAjIgdgIIANgFQAQgIAMgKIARgWIACgCQAJgNAbgEIAEgBQAIgCALABIAGABQAHABADACQADACgCADIADA1IAAADIgSgGQgRgEgMAFIgCABIgTAOIgCACQgGACgIAAQgLAAgPgFg");
  this.shape_48.setTransform(-5.9,6.2);

  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#333333").s().p("AgoAiIgdgIIANgGQAPgIANgJQALgKAHgLIACgCQAIgNAbgDIAFgBQAHgBAMAAIAGAAQAHABACACQACACgBADIADA1IgBADIgRgFQgRgEgNAEIgCABQgGACgNAKIgBACQgHADgIAAQgLAAgOgFg");
  this.shape_49.setTransform(-5.9,6.2);

  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#333333").s().p("AgoAiIgdgIIAMgIIAdgPQAMgIAHgNIACgCQAIgOAbgBIAFgBIATgBIAGAAQAHAAABACQACADgBADIADA0IgBACIgSgEQgQgDgNADIgCAAQgHACgMAKIgCACQgGADgJAAQgLAAgNgEg");
  this.shape_50.setTransform(-5.9,6.2);

  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#333333").s().p("AgoAhIgdgIIAMgIQAPgJAOgGQAMgFAJgOIABgCQAIgPAaAAIAGAAIASgCIAGgBQAIAAAAACQACADgBADIADA0IgCACIgRgDQgQgDgNACIgDAAQgHABgMAKIgBACQgHAEgJAAQgKAAgNgFg");
  this.shape_51.setTransform(-5.9,6.1);

  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#333333").s().p("AgoAhIgdgIIAMgJQAPgKAOgEQANgDAJgQIABgCQAHgQAbADIAGgBIASgCIAGgBQAIgBgBADQABADAAADIADAzIgCACIgSgDQgPgCgNAAIgDABQgIAAgLAKIgCACQgGAEgKAAQgKAAgMgEg");
  this.shape_52.setTransform(-5.9,6.1);

  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#333333").s().p("AgoAhIgdgIIALgKQAPgLAPgCQANgCAKgQIABgCQAHgRAaAEIAHAAIASgDIAGgBQAIgCgCADIABAGIADA0IgDAAIgRgBIgdgDIgDABQgIAAgKAJIgCACQgHAFgKAAQgKAAgLgEg");
  this.shape_53.setTransform(-5.9,6);

  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#333333").s().p("AgoAgIgdgIQAEgFAHgGQAPgLAPgBQAOAAALgTQAHgSAaAGQAGACATgFQAOgEgCADIADA6QgXAAgagEQgMgCgMAMQgGAGgLAAQgJAAgLgEg");
  this.shape_54.setTransform(-5.9,6);

  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#333333").s().p("AgpAfIgbgJIAEgDIAIgGQAMgIAMgEIAGgBQAOgBALgSQAJgSAXAGIABAAQAIABARgEIACAAQAKgBgCADIACAqIgCALIgZAAQgKgBgMACIgFAAQgKACgJAIQgGAEgJAAQgJAAgNgFg");
  this.shape_55.setTransform(-6.1,6);

  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#333333").s().p("AgqAeIgZgKIAEgCIAJgEIAYgNIAFgBQAOgFALgPQAMgRAUAEIABAAQAKACAPgDIADgBQAHABgCAEIACApIgFAHQgOgBgLABQgIAAgMAFIgEACQgKADgJAFQgFADgHAAQgLAAgOgGg");
  this.shape_56.setTransform(-6.2,6);

  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#333333").s().p("AgqAdIgYgLIAEgBIAJgDQAMgFAMgIIAGgBQAOgIAJgOQAQgQASAEIABAAQAMACANgCIACAAQAFACgBAEIABAoIgIAEQgPgCgJACQgHABgMAIIgEACIgTAIIgIABQgMAAgPgHg");
  this.shape_57.setTransform(-6.3,6);

  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#333333").s().p("AgrAdQgUgKgCgDIAEAAQAFAAAFgBQAMgEAMgKIAFgCQAOgLAJgKQATgQAPACIABAAQAOADALgBIADAAQACAEAAAFIAAAnIgMgBQgPgCgIACQgGACgLAMIgDADQgJAFgKACIgFAAQgMAAgSgIg");
  this.shape_58.setTransform(-6.4,6);

  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#333333").s().p("AgkAfIgGgDQgUgKgCgDIAFAAQAIAAAHgCQAJgEAJgJIADgCQANgNAMgIQAXgOALABIAAAAIAdACIAAAwIgGAAIgHgCQgQgCgHADQgDACgGAGIgKAKQgHAEgGABIgGABQgMAAgPgGg");
  this.shape_59.setTransform(-6.5,6);

  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#333333").s().p("AgjAfIgGgDQgSgIgEgEIAEAAQAJgCAGgCQAIgFAJgHIADgEQAMgMANgHQAagMAIABIABAAIAcAAIAAAvIgEABIgHgBQgPABgHACQgFACgFAEIgLAIQgGADgGACIgIAAQgLAAgOgEg");
  this.shape_60.setTransform(-6.4,6);

  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#333333").s().p("AghAfIgHgCQgQgGgGgFIAEgBIANgFQAIgFAIgIIAEgDQAKgMAPgGQAdgKAGAAIAAAAQAQgCAMAAIAAAuIgDADIgGAAQgOACgHADIgLAEQgFABgHAEIgLAEQgFACgGAAQgJAAgMgEg");
  this.shape_61.setTransform(-6.4,6);

  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#333333").s().p("AggAgIgHgCQgOgFgIgFIAEgCIAMgHQAIgFAHgHIAEgEQAIgLASgFQAfgJADAAIABAAQAOgDANAAIAAAtIgBAEIgGABIgVAGIgLADQgGAAgGACIgLAEQgGACgHAAQgIAAgLgCg");
  this.shape_62.setTransform(-6.3,5.9);

  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f("#333333").s().p("AgoAfIgagJIALgKIANgHQAIgFAIAAIACAAQANAAAKgQIACgFQAKgKAMAAIAIABQAHABARgEIADgBQAJgBgCADIACAwIAAAHQgRACgUgCIgLgBQgHgBgJAFIgGAFQgGAEgJAAQgKAAgMgEg");
  this.shape_63.setTransform(-5.9,6);

  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f("#333333").s().p("AgoAeQgMgEgMgGIAMgIIAMgIQAIgEAHAAIACAAQAOgBAJgOIADgFQALgKALAAIAGABIAYgEIADgBQAHABgCAEIACAtIgCAGQgQADgUgBIgKAAQgHgBgIAFIgGAEQgFADgIAAQgJAAgOgFg");
  this.shape_64.setTransform(-5.9,5.9);

  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#333333").s().p("AgnAdQgMgEgKgHIALgHIAMgHQAIgFAGAAIACAAQAPgBAIgLIAEgFQANgLAIAAIAGAAIAXgEIADAAQAEACgBAEIABArIgDAGQgPAEgTgBIgKAAQgHABgHAEIgGADIgJABQgKAAgPgFg");
  this.shape_65.setTransform(-5.8,5.9);

  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f("#333333").s().p("AgnAcQgKgEgKgIIAMgGIALgHQAHgFAHgBIABAAQAPgBAJgIIAEgEQAOgMAGgBIAFAAQAKgDANgBIACAAQADADgBAFIABApIgEAFQgPAFgTAAIgJABQgHABgGAEIgHACIgEAAQgLAAgRgGg");
  this.shape_66.setTransform(-5.8,5.9);

  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#333333").s().p("AgoAYQgMgFgGgIQAMgCAHgHQAKgEAIgEQAXgJANgGQAQgKAFgBQALABAMAFIgDAnQgOAHgVABQgJABgLAJQgCACgGAAQgNAAgUgJg");
  this.shape_67.setTransform(-5.9,6.2);

  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f("#333333").s().p("AgpAZQgOgHgEgGQAKgCAFgFQALgEALgFQAbgRAPgFQARgGAGgBQAJAIAIAKIgGAbQgOAEgRACQgIACgMALQgDADgIAAQgNAAgUgJg");
  this.shape_68.setTransform(-6.1,6.2);

  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#333333").s().p("AgqAZQgQgIgDgFQAIgBAEgDQANgCANgIQAggaARgCIAZgEIALAdIgJAQIgcAEQgIACgMAOQgFAEgIAAQgOAAgUgKg");
  this.shape_69.setTransform(-6.3,6.2);

  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f("#333333").s().p("AgrAaQgTgKgBgEQAHAAABgCQAQABAPgMQAkgiATABIAbgBIAGAmIgMAHQgQgBgKADQgGADgNAQQgHAFgIAAQgOAAgVgKg");
  this.shape_70.setTransform(-6.4,6.2);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape}]},1).wait(3));

  // pole
  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#333333").s().p("AgJGIIAAsPIATAAIAAMPg");
  this.shape_71.setTransform(1.1,39.3);

  this.timeline.addTween(cjs.Tween.get(this.shape_71).to({_off:true},94).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,0,15.3,78.5);


(lib.flag3 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_92 = function() {
    this.gotoAndPlay(0);
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(92).call(this.frame_92).wait(10));

  // Layer 2
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#333333").s().p("AgpAcQgigSAJAEQAbAEARgRQApgpAVADQASADAKAAIAAAxIgPgEQgQgEgGAEQgFADgOATQgIAFgJAAQgPAAgVgKg");
  this.shape.setTransform(-6.9,6);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#333333").s().p("AgnAZIgPgHIgMgGQAMABAKgDQALgEAJgGIAAAAIAcgUQAWgRALACIAAgBQARACALAAIACAGIABAqIgIgBIgFgBQgQgCgHADQgGADgMAOIgBABQgIAGgLAAQgPAAgSgMg");
  this.shape_1.setTransform(-6.6,6);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#333333").s().p("AgmAWQgGgEgJgDIgMgFQAKABAKgFIATgGIABAAQAQgHAMgKQAXgSAIABIABAAIAbAAIADAFIACApIgGACIgEgBQgPAAgIADQgJADgKAKIgCABQgHAEgMABIAAAAQgQAAgQgNgAhCAJIABABIgBgBg");
  this.shape_2.setTransform(-6.3,6);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#333333").s().p("AglAUQgFgFgKgCIgNgFQAJABALgFIARgFIACABQAQgEAMgKQAYgSAGABIABgBIAbgBIAEADIACApIgDAEIgEAAQgPABgIADQgLADgJAHIgCABQgHADgNABIgBAAQgQAAgOgOgAhBAIIAAAAIAAAAg");
  this.shape_3.setTransform(-6.1,5.9);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#333333").s().p("AgjASQgEgFgMgCIgOgFQAIABALgGQAJgDAIABIABAAQAQABANgLQAZgSAEAAIABgBIAagCIAGABIADApIgBAHIgEAAIgXAFIgVAHIgCAAIgUAEIgCAAQgQAAgMgPg");
  this.shape_4.setTransform(-5.9,5.8);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#333333").s().p("AgiAQQgDgFgNgDIgPgDQAHAAALgFQAJgFAHADQARAEAOgKIAbgTQAOgFAVAAIAEAyQglALgLgBQgGAAgRAEIgCABQgRAAgKgRg");
  this.shape_5.setTransform(-5.6,5.8);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#333333").s().p("AgiAUQgBgCgEgCIgLgDIgQgEQAIAAALgGQAJgEAHABIAEAAQANAAAMgIIACgCQAVgRAFgBIAGgCQAKgDANAAIAHABIABAHIAEArIgHADIgQADIgZADIgDABIgTAFIgFABQgPAAgLgOg");
  this.shape_6.setTransform(-5.6,5.7);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#333333").s().p("AghAYIgHgEIgKgDIgRgEQAJgBALgGQAIgFAHAAIAFgBQAMgCALgIIACgCQATgQAJgCIAGgCQAKgCAOAAIAHABQACADgBAEIADAsIgEAFIgRAAIgaADIgDABIgTAHIgGABQgOAAgLgLg");
  this.shape_7.setTransform(-5.7,5.7);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#333333").s().p("AghAcIgHgEIgKgDIgRgEQAJgCALgFQAIgFAHgCIAFgCQAMgFAJgIIADgCQAQgPANgDIAGgCQAKgCAOABIAHACQADADgBADIADAtIgDAGIgRgBQgSgBgJADIgDABIgSAJIgIABQgNAAgMgIg");
  this.shape_8.setTransform(-5.8,5.7);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#333333").s().p("AghAfIgHgDIgKgDIgSgFQAKgBALgGIAPgIIAFgCIATgRIADgCQANgOARgEIAGgBQALgDAOACIAIACQADADgBADIADAuIgCAHIgRgDQgSgCgKAEIgDABIgTALQgDACgGAAQgLAAgNgHg");
  this.shape_9.setTransform(-5.8,5.6);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#333333").s().p("AghAjIgHgDIgKgDIgSgFQAKgCALgGIAPgJIAFgDIARgUIADgDQALgMAVgFIAGgBQAKgCAPACIAIACQAFADgDADIADAvIAAAIIgRgFQgSgDgLAEIgDACIgSANQgFACgIAAQgKAAgMgEg");
  this.shape_10.setTransform(-5.9,5.6);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#333333").s().p("AgoAkIgdgIQAYgGARgRIAQgXQALgOAfgHQALgCAPADQAPADgEAFIADA5QgHgEgKgDQgUgFgMAIIgSAOQgGAEgKAAQgMAAgPgFg");
  this.shape_11.setTransform(-5.9,5.6);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#333333").s().p("AgoAfIgDgBIgZgIQALgCAKgFQAKgGAHgGIADgCQALgOAHgGIAIgFQAKgGASgFIAFgBQALgCAOACIACAAQALAFgDAEIACAqIgBANIgRgFIgJgBQgOgCgJAFIgCACIgQAJQgDACgHAAQgNAAgSgHg");
  this.shape_12.setTransform(-6,5.5);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#333333").s().p("AgpAaIgCgBIgYgJQALgCAKgFQAKgFAHgEIACgCQAMgNAIgFIAHgEIAdgHIAFgCQALgCAOACIABAAQAJAFgDAFIACAoIgDAMIgRgDIgJgBQgOgCgIAEIgCACIgPAGIgGAAQgOAAgVgJg");
  this.shape_13.setTransform(-6.1,5.4);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#333333").s().p("AgpAVIgDgBQgNgHgJgEQAKgBAKgFIASgJIACgBQAMgLAKgDIAGgDQAPgBAOgEIAFgBQALgDANACIABAAQAHAFgCAGIABAnIgGAKIgQgBIgJgBQgOgBgHADIgDABIgOADIAAAAQgQAAgXgMg");
  this.shape_14.setTransform(-6.2,5.3);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#333333").s().p("AgEAeQgPgCgXgNIgCgBQgNgIgIgEQAKAAAKgDIASgKIABgBQANgKALgBIAGgBQARABAMgDIAFgCQALgDAMABIACAAQAEAGgCAGIABAmIgIAJIgQAAIgJAAQgPgBgGACIgCABIgOgBg");
  this.shape_15.setTransform(-6.3,5.3);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#333333").s().p("AgGAbQgPgFgVgOIgCgBQgNgHgIgEQAKAAALgFIARgJIACgBQANgHAMAAIAHABQASADAJgDIAGgCQALgDALABIACAAQACAGgBAGIABAlIgLAHQgJACgHABIgJAAIgUAAIgCAAIgOgDg");
  this.shape_16.setTransform(-6.4,5.4);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#333333").s().p("AAbAfIgVgBQgRgGghgYIgUgMQAKAAAKgFIASgJQASgHARAGQAUAGAHgDQAOgFAPAAIAAAxQgZALgMAAIgBAAg");
  this.shape_17.setTransform(-6.5,5.5);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#333333").s().p("AAcAeIgNAAIgJAAIgNgFQgOgFgPgNIgIgGIgGgCIgOgJQAJAAAKgFIABAAIANgGIAFgCQAPgEAMABIAIABQAOACAIgBIAEgBQAOgEAPAAIAAACIABAvIgBAAQgYAKgMAAIAAAAg");
  this.shape_18.setTransform(-6.4,5.5);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#333333").s().p("AAGAeIgNgDQgPgEgOgNIgIgHIgGgDIgPgIQAJABAKgGIABAAQAJgEAFgBIAGgBQAOgDAMAAIAIgBQAOABAHgCIAFgBQANgEAQAAIAAABIACAwIgBAAQgYAKgMAAIgNAAIgKAAg");
  this.shape_19.setTransform(-6.2,5.5);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#333333").s().p("AgHAdQgQgDgOgOIgIgHIgGgEIgOgHQAIABALgGIABAAQAIgFAGAAIAGAAIAagDIAHgCIAWgDIAEgBQAOgEAPgBIABACIACAwIAAAAQgYAJgMABIgOAAIgJAAIgOgBg");
  this.shape_20.setTransform(-6.1,5.6);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#333333").s().p("AgHAfQgRgCgNgPIgIgHIgGgEIgOgHQAHABAMgGIABAAQAIgFAGABIAGAAQAPAAALgDIAHgCIAVgGIAEgBQAOgFAQAAIAAABIADAwIAAABQgXAIgNABIgNABIgKABIgOAAg");
  this.shape_21.setTransform(-6,5.6);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#333333").s().p("AglAPIgIgHIgGgEIgPgGQAHAAAMgGIABAAQAJgFAHABIAFABQAPACALgFIAHgDIAUgIIAFgBQANgFAQAAIABABIAEAwIAAABQgXAIgNABIgNABIgLABIgNACQgUgBgLgQg");
  this.shape_22.setTransform(-5.8,5.7);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#333333").s().p("AglAQQgDgFgMgHIgOgFQAHAAAMgGQAKgGAHADQARAGAOgIQARgLAKgEQAOgFAVAAIAEAyQglALgLgBQgGAAgTAEIgCABQgTAAgKgRg");
  this.shape_23.setTransform(-5.7,5.8);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#333333").s().p("AgmATIgDgCQgEgFgJgEIgOgIQAIABAMgEQAKgEAHAAIAGABQAOAAALgHQARgMAKgEIALgCIAZgCIABADIAEAvIgmAJIgLACIgOADIgLADIgCAAQgSAAgMgPg");
  this.shape_24.setTransform(-5.8,5.8);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#333333").s().p("AgnAWIgDgDIgOgIIgNgHQAJAAALgEQAKgCAHgBIAGgBQAOgDAMgIQAPgMALgEIAKgCIAbgBIACACIAFAxIgoAHQgGABgFACIgNAFIgMADIgCAAQgRAAgOgNg");
  this.shape_25.setTransform(-5.9,5.9);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#333333").s().p("AgoAYIgEgCIgOgIIgMgHQAKABAKgEIARgEIAGgCQAOgGALgIQAQgOAMgDIAJgBIAcgBIADABIAFAyIgpAGQgFABgGAEIgNAGQgGACgFABIgDAAQgRAAgPgMg");
  this.shape_26.setTransform(-6,5.9);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#333333").s().p("AgpAbIgEgCIgOgIQgQgIAEABQALABAKgCQAJgDAHgEIAGgCIAZgSQAQgOAMgDIAKgBQAKABATgBIADAAIAGA0IgrAEQgEABgHAFIgMAIQgGADgFAAIgEAAQgPAAgSgKg");
  this.shape_27.setTransform(-6.1,6);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#333333").s().p("AgvAcQgigSAJAEQAbAEARgRQApgpAVADQAMACAWgDIAGA1IgrAEQgGABgRAPQgIAEgIAAQgRAAgWgLg");
  this.shape_28.setTransform(-6.3,6);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#333333").s().p("AgsAcIgCgBQghgRAJAEQAaAEARgRIABgBQAognAUACIAGAAQAMABAQgCIAAADIAFAyIgBAAIgPAAQgOAAgJACIgDAAQgGACgNAOIgDACQgIAEgIAAQgQAAgVgLg");
  this.shape_29.setTransform(-6.4,6);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#333333").s().p("AgrAcIgCgBQghgRAJAEQAaAEARgRIABgBQAngmAUABIAGAAQANABAOgBIABACIAEAxIgBABIgPgBQgOgBgJACIgDABQgFADgNAOIgDACQgIADgIAAQgPAAgVgKg");
  this.shape_30.setTransform(-6.5,6);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#333333").s().p("AgqAcIgCgBQghgRAJAEQAaAEARgRIABgBQAmglAVAAIAFAAQAOACANgBIABABIADAxIgBABIgPgCQgPgCgIADIgCABQgGADgMAPIgDACQgHADgIAAQgPAAgVgKg");
  this.shape_31.setTransform(-6.7,6);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#333333").s().p("AgpAcIgCgBQgggRAIAEQAaAEARgRIABgBQAlgkAVgBIAFAAQAPACALAAIACABIACAwIgBABIgPgDQgPgDgHADIgDABQgFAFgMAPIgDACQgHADgHAAQgQAAgUgKg");
  this.shape_32.setTransform(-6.8,6);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#333333").s().p("AgoAYIgJgFQgWgMAFACQAMACALgDQALgEAJgGQASgQANgIQATgKAKABIADAAIAcABIAAAxIgEAAIgKgCQgQgCgHADIgFAEQgGAEgIAKIgEACQgGACgEAAQgQAAgWgMg");
  this.shape_33.setTransform(-6.8,6);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#333333").s().p("AgnAUIgKgFQgTgMADABQALACAKgEQAMgCAIgHQASgOAOgFQATgHAKAAIADAAIAbAAIAAAwIgDABIgKgBQgPgBgIADIgFADQgIAEgHAIIgEABIgHABQgPAAgYgOg");
  this.shape_34.setTransform(-6.7,5.9);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#333333").s().p("AgmARIgKgGIgRgLQALABAKgCQAMgFAIgGQASgMAOgCIAdgFIADAAIAagBIAAAwIgCABIgKAAQgPABgHACIgGADQgJACgHAGIgDABIgFABQgOAAgagQg");
  this.shape_35.setTransform(-6.7,5.8);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#333333").s().p("AglANIgJgGIgTgKQALABAKgEIATgKQASgLAPABQAUgBAIgBIAEgBQAOgCAMAAIAAAvIgCACIgJACIgWAEIgHACQgKABgGAEIgEABIAAAAQgPAAgcgTg");
  this.shape_36.setTransform(-6.6,5.7);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#333333").s().p("AgkAKIgJgHIgTgKQAKAAAKgEIATgKQASgJAQADQATADAIgCIAEgBQANgDAMAAIAAAuIgBADIgIADIgXAFIgGABQgMABgGABIgDABQgPgCgbgTg");
  this.shape_37.setTransform(-6.6,5.6);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#333333").s().p("AAaAeIgWAAQgQgEgfgXQgMgHgJgFQAJABALgGQALgHAHgCQASgFAQADQATAEAIgEQAOgFAPAAIABAyQgbALgLAAIgBgBg");
  this.shape_38.setTransform(-6.4,5.6);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#333333").s().p("AgpAHQgLgHgMgFQAJABAKgHQALgHAHgCQATgDAPABQASAAAIgDQAOgFARAAIABAyQgdALgMgBQgQgBgFACQgQgDgcgVg");
  this.shape_39.setTransform(-6.2,5.6);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#333333").s().p("AgnALQgLgIgPgEQAJAAALgHQALgIAHgBIAigDQAQgCAIgDQAOgFASAAIACAxQgfALgMAAQgNgBgIACQgPgCgZgSg");
  this.shape_40.setTransform(-6,5.6);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#333333").s().p("AglAPQgKgIgSgHQAIAAALgFQALgJAHAAQAUAAAOgDIAYgJQAOgFATAAIADAyQgiALgLgBQgLAAgKADQgQgBgVgQg");
  this.shape_41.setTransform(-5.9,5.7);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#333333").s().p("AgjATQgKgHgUgJQAIABALgHQAKgIAHAAQAVACANgGQAOgIAJgDQAOgFAUAAIAEAxQgjALgMAAQgIAAgLADIgCAAQgQAAgRgNg");
  this.shape_42.setTransform(-5.7,5.7);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#333333").s().p("AgiAWQgIgGgXgJQAHAAALgHQALgJAHABQAVADAMgIQANgKAKgEQAOgFAVAAIAEAyQglALgLgBQgGAAgOAEIgEABQgOAAgOgLg");
  this.shape_43.setTransform(-5.6,5.8);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#333333").s().p("AgKAgQgLgBgMgGIgRgHIgQgFQAIAAALgJQAKgHAHgBQAHABAGgCQALgCAHgFIAGgEQAKgHAIgCIAOgDIANgDIAJAAIACAKIAEAmIgQAIQgVAEgKgBIgMACIgIACIgGAAIgEAAg");
  this.shape_44.setTransform(-5.6,5.6);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#333333").s().p("AgJAgQgLAAgMgFIgSgEIgQgDQAIgCAKgJQAKgIAHgBQAHAAAFgDIATgJIAEgDQALgGAIgCIAPgEIAMgDIAKgBIAEAIIADAnIgNAKQgVADgKgBIgNACIgKACIgFAAIgEAAg");
  this.shape_45.setTransform(-5.7,5.5);

  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#333333").s().p("AgHAgQgMAAgMgDIgTgBIgRgCQAJgCAJgJQAKgIAGgDQAHgDAFgCQAHgFAKgFIAFgEIAUgHIAPgDIANgEIAJgCIAGAGIAEAoIgLANIggAAIgNABIgLACIgHABIgBAAg");
  this.shape_46.setTransform(-5.8,5.4);

  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#333333").s().p("AhDAgQAJgEAJgIIAPgMQAHgEADgEQAHgGAKgFIAHgDIATgGIAQgEIANgFIAJgCIAIAEIADAoIgHAPIgigBIgNACIgLACIgJAAIgZAAIgTABIgPAAIgCAAg");
  this.shape_47.setTransform(-5.8,5.3);

  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#333333").s().p("AgyAXIAPgOQAGgFADgEQAFgJALgFIAHgDIAUgFIAQgEIAOgFIAJgDIAJACIAEApIgFARIgigCIgOABIgMACIgJABIgZACIgTADIgTACQAKgFAIgHg");
  this.shape_48.setTransform(-5.9,5.5);

  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#333333").s().p("AgyAZIAOgPQAGgGACgGQAEgKALgFIAIgCIAUgFIARgDIAOgHIAJgDIALAAIADAqIgCAUQgUgEgPAAIgOABIgMABIgKABIgZAFIgUAGIgTADQAKgFAIgIg");
  this.shape_49.setTransform(-6,5.7);

  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#333333").s().p("AgfgCQADgQATgDQAYgDAPgEIAOgIQAJgFANAAIAEBAQgfgHgUADIgWACQgVAEgZAMIgUAFQAhgXAFgVg");
  this.shape_50.setTransform(-6,5.8);

  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#333333").s().p("AgjAKQAEgHACgEQAGgPARgEIAfgGIAHgCIAOgGIALgEIAKABIADApIgDAUIgUgDQgOgCgNAEIgDAAQgGACgQABQgPACgRAEIgOAEQgLABgHACQAYgNAKgQg");
  this.shape_51.setTransform(-6.1,5.7);

  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#333333").s().p("AhEAkIgCABIACgBgAgiAKQAFgGACgEQAHgOARgFQARgFANgCIAHgBQACAAAMgFIALgEIAIAEIAEApIgIAQIgTgCQgNgBgOAGIgCAAQgHACgPABIggADIgOABQgKgBgFACQAXgKALgQg");
  this.shape_52.setTransform(-6.1,5.5);

  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#333333").s().p("AgpAiIgOAAIgMgCQAXgGAMgQIAHgKQAJgNAPgGQARgHAMgBIAHAAQAEAAALgEIALgDIAHAFIADAqIgLAMIgUgBQgKgBgPAJIgCAAQgIADgOAAIgKAAIgWgBgAhDAgIgEABQABAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAg");
  this.shape_53.setTransform(-6.1,5.4);

  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#333333").s().p("AgLAkQgPAAgRgEIgOgCIgLgEQAXgDAOgQIAIgJQAKgNANgGQASgJAMAAIAHAAQAEAAALgDIALgCIAFAHIAEAqIgPAJIgUAAQgJgBgPALIgCAAQgIADgKAAIgEAAgAhEAaIgDABQAAAAAAgBQAAAAAAAAQABAAABAAQAAAAABAAg");
  this.shape_54.setTransform(-6.2,5.6);

  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#333333").s().p("AgNAlQgOAAgSgHIgNgFIgMgEQAZAAAPgRIAJgIQAMgNALgHQASgKAMABIAHAAQAFAAAKgCIAMgCIADAKIAEAqIgUAFIgTABQgHAAgRANIgBAAQgHAEgJAAIgGgBgAhHAUQgBAAAAAAQAAAAAAAAQAAAAABAAQAAAAABABIgBgBg");
  this.shape_55.setTransform(-6.2,5.8);

  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#333333").s().p("AgpAbIgFgCIgNgHQgQgJAEACQALABAKgDQAJgCAHgEIAGgDIAYgSQARgOAMgDIAJgBQALABATgBIADgBIAGA1IgqAEQgFABgHAFIgLAIQgHADgFABIgEAAQgPAAgSgLg");
  this.shape_56.setTransform(-6.2,6);

  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#333333").s().p("AgoAZIgEgCIgOgIIgMgHQAKABAKgDIARgGIAGgBIAZgQQAQgNALgEIAKgBQALABARgCIADABIAGAzIgqAFQgFABgGAEIgMAHQgGADgGAAIgDABQgQAAgQgMg");
  this.shape_57.setTransform(-6,6);

  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#333333").s().p("AgoAXIgDgCIgOgJIgMgHQAJABALgEIAQgDIAHgCQANgFAMgHQAQgOALgDIAKgCIAbgBIACACIAFAxIgoAHQgFABgGADIgNAFQgGACgFABIgDABQgRAAgPgNg");
  this.shape_58.setTransform(-5.9,5.9);

  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#333333").s().p("AgnAVIgDgDIgNgIIgNgIQAIABALgDQAKgEAHAAIAGgBQAOgCAMgHQAQgNAKgDIALgCIAagCIABADIAFAwIgnAHIgLADIgNAEIgMADIgCABQgSAAgNgOg");
  this.shape_59.setTransform(-5.8,5.9);

  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f("#333333").s().p("AgmATIgCgDQgFgEgIgFIgOgHQAHAAAMgDQAKgFAHABIAGABQAOAAALgHQARgMAKgDIALgDIAZgCIABAEIAEAuIgmAJIgLACIgOADIgLACIgCABQgSAAgMgPg");
  this.shape_60.setTransform(-5.8,5.8);

  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f("#333333").s().p("AglAPIgIgIIgGgEIgPgGQAIABALgGIABAAQAJgFAHABIAFABQAPABALgEIAHgDIAVgIIAEgBQANgEAQAAIABAAIAEAwIAAABQgXAIgNABIgNABIgLABIgNABQgTAAgMgQg");
  this.shape_61.setTransform(-5.8,5.6);

  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f("#333333").s().p("AgHAeQgRgCgNgPIgIgHIgGgEIgOgHQAIABALgGIABAAQAIgFAGABIAGAAQAPAAALgDIAHgCIAVgFIAFgBQANgFAQAAIABACIACAvIAAABQgYAIgMABIgNABIgKABIgOgBg");
  this.shape_62.setTransform(-6,5.6);

  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f("#333333").s().p("AgHAcQgQgDgNgOIgIgHIgGgEIgPgHQAIAAALgFIABAAQAJgFAFAAIAGgBIAagDIAHgBQAOAAAIgCIAEgBQAOgEAQAAIAAABIACAwIgBAAQgYAKgMAAIgNAAIgJAAIgOgCg");
  this.shape_63.setTransform(-6.2,5.5);

  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f("#333333").s().p("AAPAeIgJAAIgNgEQgOgFgPgNIgIgHIgGgBIgOgKQAIABALgFIABAAQAIgFAFgBIAGgCQAOgEAMABIAIAAQAOACAIgBIAEgBQAOgEAPAAIAAACIABAvIgBAAQgYAKgMAAIgNAAg");
  this.shape_64.setTransform(-6.4,5.5);

  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#333333").s().p("AgGAaQgPgGgUgNIgEgDIgSgLIgCAAIADgBQAIAAAJgDIASgKIADgBQASgIANAEIACAAQASADAIgDIAFgBQAMgCAMAAIAAAAIACAJIAAAoIgKAGQgRAFgKgBIgLAAIgLAAIgNgEg");
  this.shape_65.setTransform(-6.5,5.5);

  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f("#333333").s().p("AgFAcQgPgEgXgNIgEgDIgSgKIgCgBIADAAQAJAAAIgDIATgKIADgBQASgLANADIABAAQASAAAIgCIAGgBIAYgBIABAAIAEAHIgBApIgIAIQgSADgKgBIgLAAIgMABIgNgCg");
  this.shape_66.setTransform(-6.4,5.6);

  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#333333").s().p("AgFAeQgPgCgYgNIgEgDIgTgMIgBAAIACAAQAJAAAJgBQALgFAIgFIADgCQATgMALAAIABAAIAbgEIAFAAIAagBIAAAAIAGAGIgBAqIgHAJQgRACgLgBIgMAAQgIABgEACIgDAAIgLgBg");
  this.shape_67.setTransform(-6.4,5.6);

  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f("#333333").s().p("AgtASIgEgCQgPgIgFgEIAAAAQgBAAABgBQAAAAAAAAQAAAAABAAQAAAAABAAQAIABAJgDQAMgCAIgGIADgBQAUgPAJgBIACgBQAQgEALgBIAFgBIAaABIAAAAIAIAEIgBArIgGALIgbgBQgIgBgFABQgIABgFACIgOACQgQgBgZgNg");
  this.shape_68.setTransform(-6.3,5.7);

  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#333333").s().p("AguAWIgEgCQgQgIgEgEIgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAJABAJgCQAMgDAIgFIADgCQAVgRAHgDIACgBQAQgHALAAIAGAAQANABANAAIABAAIAKADIgCAsIgEAMIgcgDQgIAAgGABQgHACgGACIgOADIgDABQgQAAgYgMg");
  this.shape_69.setTransform(-6.3,5.7);

  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f("#333333").s().p("AgvAZIgEgCQgRgHgEgEIAAAAQAAAAgBgBQAAAAAAAAQABAAAAAAQAAAAABAAQAKABAIgCQAMgCAKgIIADAAQAVgUAHgEIAAgBQAQgJAMAAIAGAAQANADAOAAIABAAIAMAAIgDAuIgCANQgSgEgLAAQgIgBgGACIgOAFIgOAFIgHAAQgQAAgWgKg");
  this.shape_70.setTransform(-6.2,5.8);

  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#333333").s().p("AgwAdQgVgJgEgEQgBAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAbAEARgRIAdgbQARgPAQAEQAOAEANAAIAPgBIgEA+QgdgJgOAEQgMAEgRAJIgLABQgPAAgVgJg");
  this.shape_71.setTransform(-6.2,5.9);

  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#333333").s().p("AguAeIAAAAQgUgIgGgEQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAYACARgPIABgCIAUgTIAJgJQAPgNARACIABAAQANADANABIABAAIAOAAIAAACIgDA7IgSgFQgPgDgKADIgKAEIgSAJIgBABIgLABQgPAAgTgIg");
  this.shape_72.setTransform(-6.1,5.9);

  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#333333").s().p("AgsAfIAAAAIgbgLQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAQAXAAARgPIABgCIATgTIAJgJQAOgMARAAIACAAIAZADIACAAIAMADIAAABIgBA7IgSgGQgOgDgKADIgKAEIgSAKIgBABQgFACgHAAQgOAAgSgIg");
  this.shape_73.setTransform(-6.1,5.8);

  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f("#333333").s().p("AgqAhIgBAAIgbgKIADgBQAWgDAQgPIACgCIARgUIAJgIQANgLASgBIACAAIAaACIABAAQALACABACIAAABIAAA6IgSgGQgOgDgJADIgKAEIgSAKIgCACQgEACgIAAQgNAAgRgGg");
  this.shape_74.setTransform(-6.1,5.8);

  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#333333").s().p("AgpAiIgBAAIgcgJIAEgBQAWgEAQgQIABgCIAQgUQAEgFAFgEQALgJAUgDIACAAQALgBAPADIABAAQAMADgBADIAAAAIACA6QgIgDgKgDQgNgEgKADQgFABgEADIgRALIgCACQgFADgJAAQgNAAgQgGg");
  this.shape_75.setTransform(-6,5.7);

  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f("#333333").s().p("AgjASQgFgFgLgCIgOgFQAIABAKgFQAJgDAIAAIAFABQAOAAALgKQAYgSAEgBIAJgCIAagBIAAAAIAEAvIgBACIgJABIgWAFIgSAFIgFABIgRAEIgCAAQgRAAgLgPg");
  this.shape_76.setTransform(-5.8,5.8);

  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#333333").s().p("AglAUQgFgFgKgCIgNgFQAJABAKgFQAJgEAHAAIAGAAQANgDALgKQAXgRAGgBIAJgCIAaAAIAAAAIADAvIgCACIgJAAQgPABgIACQgJADgIAGIgEACQgHADgKABIgCAAQgQAAgOgOgAhCAIIABAAIgBAAg");
  this.shape_77.setTransform(-6.1,5.9);

  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f("#333333").s().p("AgmAXQgHgFgIgDIgMgFQAJABAKgEIARgGIAFgBQAOgGAKgJQAVgQAJgCIAIgBIAbAAIAAABIACAwIgCAAIgKgBQgPgBgIADQgHADgJAJIgEADQgHADgKABIgBAAQgQAAgQgMgAhCAKQAAAAABAAIgBAAg");
  this.shape_78.setTransform(-6.3,6);

  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#333333").s().p("AgoAZIgOgHIgMgGQALABAKgDQAJgDAIgEIAFgDIAXgRQAUgQALgCIAIgBQAQACALAAIABAAIABAxIgEAAIgKgDQgPgCgHAEQgHACgJAMIgEAEQgHAEgJABIgCAAQgPAAgTgMg");
  this.shape_79.setTransform(-6.6,6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape}]},1).wait(10));

  // pole
  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f("#333333").s().p("AgJGIIAAsPIATAAIAAMPg");
  this.shape_80.setTransform(1.1,39.3);

  this.timeline.addTween(cjs.Tween.get(this.shape_80).to({_off:true},97).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,0,15.9,78.5);


(lib.flag = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_59 = function() {
    this.gotoAndPlay(0);
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(26));

  // Layer 2
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#333333").s().p("AgsAcQgVgLABgDIAEABQASADARgRQApgpAVADQASADAKAAIAAAxIgPgEQgQgEgGAEQgFADgOATQgIAFgJAAQgPAAgVgKg");
  this.shape.setTransform(-6.6,6);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#333333").s().p("AgpAeIgBAAQgTgJgDgEIAFAAQAGAAAFgCQAJgEAJgHIADgDIAYgTQASgPAOgCIAHAAQAMABAIAAIAIgBIAAABIABAwIgHAAIgGgBIgCAAQgNgCgIACQgFACgJAJIgGAGQgJAFgLABIgFAAQgMAAgNgGg");
  this.shape_1.setTransform(-6.3,5.9);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#333333").s().p("AgoAhIgBAAQgRgHgFgFIAEgBQAGgBAFgDQAJgFAHgHIADgDIAYgSQARgNAPgCIAIgBQAMABAIgBIAIgCIAAABIABAwIgEABIgGAAIgDABQgMgCgJACQgFABgKAGIgHAEQgIAEgLADQgGACgGAAQgIAAgJgDg");
  this.shape_2.setTransform(-6.1,5.8);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#333333").s().p("AgnAjIgBAAQgOgFgJgGIAFgCQAFgCAFgEIAPgMIADgCIAYgSQAQgMAQgCIAIgBQANAAAHgCIAIgCIAAAAIACAwIgDADIgFABIgDABIgVAAQgHABgKADIgHACQgJADgKAFQgJAEgJAAIgKgBg");
  this.shape_3.setTransform(-5.8,5.7);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#333333").s().p("AgmAlIgBAAQgLgDgMgHIAFgDIAJgIIANgMIADgDIAYgQQAQgLARgCIAJgBQAMgBAGgDIAIgDIAAAAIADAvIgBAGQgBABgEABIgCABIgWAAIgSAAIgIABQgIACgKAGQgLAIgLAAIgFAAg");
  this.shape_4.setTransform(-5.6,5.7);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#333333").s().p("AglAmQgJAAgQgJQAGgEAHgJQAHgJAFgEIAbgSQAPgKASgCQAUgBAIgFIAIgFIAEA3QgBADgGABQgOAEgbgHQgPgDgLALQgNANgMAAIgBgBg");
  this.shape_5.setTransform(-5.3,5.7);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#333333").s().p("AglAlIgBAAQgJgCgOgIQAHgEAGgIIAHgHIAFgGIAJgDIATgMIAIgGQAMgGALgBIADgBQARgCAIgEIAFgCIADgBIADAzIAAACQgCADgGACQgLADgWgEIgGgBQgKgBgGAEIgKAFQgLAJgMAAIgDAAg");
  this.shape_6.setTransform(-5.4,5.7);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#333333").s().p("AglAjIgBAAQgJgCgNgJQAHgDAGgHIAHgHIAGgGIAIgDIAUgKIAIgGQAMgGAKgCIACgBQAQgCAJgEIAFgBIACgBIADAyIgBADQgBADgGABQgMAEgUgDIgGgBQgKgBgGAEIgKAFQgJAGgKAAIgHgBg");
  this.shape_7.setTransform(-5.4,5.7);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#333333").s().p("AglAhIgBAAQgKgDgLgIQAHgDAHgHIAHgGIAFgGQAFgBADgBIAVgJIAIgGQAMgHAJgCIACgBIAZgGIAEgBIACABIACAxIgBACQgCADgFABQgMAEgUgCIgFgBQgJAAgGAFIgLADQgHAEgIAAIgLgCg");
  this.shape_8.setTransform(-5.5,5.7);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#333333").s().p("AglAgIgBgBQgKgDgKgIQAIgDAGgGIAHgGIAGgFQAEgCAEgBIAVgHIAIgGQALgIAIgCIADgBIAYgFIAFgBIABABIABAwIgCADQgCACgFABQgLAEgTgBIgFAAQgJAAgGAFIgLADQgFABgFAAQgHAAgJgCg");
  this.shape_9.setTransform(-5.6,5.8);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#333333").s().p("AglAeIgCgBQgJgEgJgIQAIgDAGgEIAIgHIAFgDQAFgDADgBQAOgCAIgEIAIgFQALgJAHgCIACgBQANgEALgCIAFAAIAAACIABAvIgCADIgHADQgLAEgSAAIgFAAQgJABgGAFQgEACgGAAIgFAAQgJAAgNgEg");
  this.shape_10.setTransform(-5.7,5.8);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#333333").s().p("AgnAaQgJgEgIgJQAOgDAIgJQAIgGAGAAQAUgBAJgJQAQgMAEgCQAOgFAOAAIAAAyQgNAKgYAAQgLABgJAGIgGACQgMAAgVgJg");
  this.shape_11.setTransform(-5.8,6);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#333333").s().p("AgmAbQgKgDgJgHQAOgEAIgJQAEgEAEgBIAFgDQANgBAJgEIAIgFIASgKIADgCIAJgEQAJgDAKAAIABAAIAAAyIgHAGIgKACIgTACIgFAAQgIACgJAEIgHABQgMAAgTgHg");
  this.shape_12.setTransform(-5.7,5.7);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#333333").s().p("AgmAcQgKgCgKgFQANgGAIgJIAIgGIAFgCIAYgHIAHgEIATgJIADgCIAJgFQAJgDALAAIAAAAIABAyIgGAHIgKABIgTABIgFAAQgJACgJADIgJABQgMAAgSgFg");
  this.shape_13.setTransform(-5.6,5.5);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#333333").s().p("AglAeQgLgCgLgEQANgHAIgIIAIgIIAFgCIAYgHIAHgEIAUgIIADgCIAJgFQAJgFALAAIAAAAIACA0IgEAIIgKgBIgVAAIgFAAQgJACgJADIgMABQgMAAgPgDg");
  this.shape_14.setTransform(-5.5,5.3);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#333333").s().p("AglAfQgLgBgLgCQAMgJAIgIIAHgIIAFgDQALgFANgDIAIgDIAVgHIADgCIAJgGQAJgFALAAIAAAAIACA0IgCAJIgKgCQgKgCgLABIgFABIgTADIgRABIgXgBg");
  this.shape_15.setTransform(-5.5,5.1);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#333333").s().p("AgkAgIgYgBIATgSIAIgIIAFgFQAJgFAPgDIAIgCQAQgEAGgCIADgCIAJgHQAJgGALAAIABAAIACA1IAAAKQgEgCgGgCQgLgCgLABIgGAAIgTADQgOACgRAAIgJAAg");
  this.shape_16.setTransform(-5.4,4.9);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#333333").s().p("AgjAFQAJgLAUgDQAYgEAIgDIAMgKQAIgGAMAAIAFBAQgEgDgGgCQgNgEgQADIhVAHQASgTAIgJg");
  this.shape_17.setTransform(-5.2,4.9);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#333333").s().p("Ag9AhIALgLIAJgLIAGgHQALgLASgDQAXgFAIgDIABAAIAMgIIAFgDQAGgDAGAAIADAAIAEA0IgBALQgEgDgGgBQgMgEgMACIgEABIgXAEQgQACgTAAIgQABIgKAAg");
  this.shape_18.setTransform(-5.2,5);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#333333").s().p("AgkAhQgLABgOgCQAHgGAEgFIAKgLIAGgHQALgLARgEIAegJIACAAIALgGIAGgDQAHgCAFgBIADABIAEA0IgEAIIgKgDQgLgCgMABIgDACIgWAFQgMADgPAAIgJgBg");
  this.shape_19.setTransform(-5.2,5.1);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#333333").s().p("AglAiQgKAAgOgEQAIgFAEgFIAJgMIAGgGQAMgLAPgFQAUgIAKgCIACAAIAMgEIAGgDIAMgDIACACIAFAzIgGAGIgKgCQgMgBgLABIgDACQgLACgJAFQgLADgMAAIgOgBg");
  this.shape_20.setTransform(-5.1,5.3);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#333333").s().p("AgmAiQgJgBgNgFQAHgFAEgFIAKgLIAGgHQAMgLAOgGQASgJALgBIADAAIAMgDIAFgCIANgDIABACIAGAzIgIAEIgLgBQgMgBgKACIgDACQgKACgJAGQgJAEgMAAIgQgCg");
  this.shape_21.setTransform(-5.1,5.5);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#333333").s().p("AgnAjQgIgCgNgHQAIgEAEgFIAJgMIAGgFQANgMANgHQARgLALAAIADAAIANgBIAFgCIANgDIABADIAFAyIgKACIgKAAQgNAAgIACIgEACQgJADgJAHQgIAEgLAAQgIAAgKgCg");
  this.shape_22.setTransform(-5,5.7);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#333333").s().p("AgoAjQgHgCgNgIQAJgFADgFIAKgMQAngnAXADQAHABALgCIANgDIAGA2QgcgBgPAEQgKADgLALQgHAEgLAAQgIAAgLgDg");
  this.shape_23.setTransform(-5,5.9);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#333333").s().p("AgkAkIgDgBQgIgDgOgHIAJgHIADgDQAHgKADgCIAGgDIAYgTQAQgQARADIAAAAQAHABALgCIADgBIALgCIAAADIAGAyIgEABQgZAAgOACIgIADQgIACgGAIQgHAEgLAAQgGAAgJgBg");
  this.shape_24.setTransform(-5,5.9);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#333333").s().p("AgjAjIgEgBQgJgCgNgHIAIgIIADgDQAHgJAEgCIAGgDQANgHALgMQAOgQATAEIAAAAQAHABAMgDIADgBIAKgCQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAFAyIgDACIgoACIgHACQgJABgGAIQgHAFgLAAQgGAAgIgCg");
  this.shape_25.setTransform(-5.1,5.9);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#333333").s().p("AgjAjIgEgBQgKgDgNgFIAHgJIAEgDQAGgJAFgCIAHgDQANgEALgOQANgRAUAEIAAAAQAHABAMgCIAEgBIAKgCQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAFAzIgDADIgoAAIgHABQgKABgGAIQgGAFgLAAQgHAAgIgBg");
  this.shape_26.setTransform(-5.1,5.9);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#333333").s().p("AgjAiIgDgBIgYgHIAGgKIADgDQAHgIAGgCIAHgCQANgCALgRQALgRAWAFIABAAQAGABAMgDIAFgBIAKgCQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAEAzIgBAEIgpAAIgHAAQgLAAgGAJQgGAFgLAAIgPgCg");
  this.shape_27.setTransform(-5.2,5.9);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#333333").s().p("AgjAiIgDgBIgZgHQACgFAEgFIADgDQAGgIAHgCIAHgBQAOgCALgRQAJgSAYAGIABAAQAGABANgDIAEgBIAKgCQABgBAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAEA0IgBAFQgVAAgUgCIgIAAQgMgBgFAJQgFAFgMAAIgPgBg");
  this.shape_28.setTransform(-5.2,5.9);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#333333").s().p("AgjAiIgcgHQABgGAEgGQAJgMAPAAQAOgBALgSQAJgSAYAGQAGABATgFQAOgEgCAEIADA5QgXABgagEQgNgCgFAJQgEAGgNAAIgPgBg");
  this.shape_29.setTransform(-5.3,5.8);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#333333").s().p("AgcAiIgGgBIgdgIQACgFAEgFIAGgGQAIgGAKgCIADgBQALgCAMgPIACgDQALgNAUAEIABAAQAHABARgEIADgBQAJgBgCADIADAtIgBAKQgQACgPgCIgRgCQgIgBgGADIgEAFQgFAFgLABIgJgBg");
  this.shape_30.setTransform(-5.5,5.9);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#333333").s().p("AgdAhIgGgBIgbgHIAGgKIAGgFQAIgHAKgDIADAAQAKgEANgOIACgCQAPgMAQAEIABAAIAYgEIADgBQAIAAgCAEIACAsIgCAIQgRADgOgBIgQgCQgIAAgGADIgDAEQgFAEgLAAIgKgBg");
  this.shape_31.setTransform(-5.6,5.9);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#333333").s().p("AgdAhIgGgBQgOgDgNgFIAHgJIAHgFQAHgGAJgEIADgBIAYgRIACgCQATgKANACIAAAAIAYgEIAEgBQAGACgCAEIACAqIgEAIQgRAEgNgBIgQgCQgHAAgGADIgEAEQgFADgJAAIgLgBg");
  this.shape_32.setTransform(-5.8,5.9);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#333333").s().p("AgeAhIgGgBQgNgEgNgFIAIgIIAHgFIAQgLIACgCQAJgHAQgIIACgCQAXgJAJABIABAAIAXgFIAFAAQADADgBAEIABAqIgFAGQgSAFgMgBIgPgBQgHAAgFADIgEADQgFADgIAAIgNgBg");
  this.shape_33.setTransform(-5.9,5.9);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#333333").s().p("AgfAgIgFgBQgOgDgLgGIAIgHIAHgEIAQgNIACgCQAHgIASgHIADgBQAZgIAHAAIAAAAQALgDANgCIAEAAQACAEAAAFIAAAoIgHAFQgTAHgKgBQgIgBgHAAQgGABgFADIgFACQgEACgHAAIgPgCg");
  this.shape_34.setTransform(-6.1,5.9);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#333333").s().p("AgfAgQgQgDgOgIIAQgKQAJgHAIgKQAHgKAVgEIAhgIQAOgFAPAAIAAAyQgaAMgMgCQgNgCgLAGQgFADgKAAQgHAAgJgCg");
  this.shape_35.setTransform(-6.2,5.9);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#333333").s().p("AgiAgQgTgFgJgGQANgHAGgFQAKgJAJgKQAJgKASgDIAigGQANgEANAAIgBAzQgaAJgMgBQgNgBgLAHQgGACgIAAQgIAAgMgCg");
  this.shape_36.setTransform(-6.1,5.9);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#333333").s().p("AgkAfQgWgHgFgEQAOgFAJgIQALgJAJgLQALgMARgBIAggEQAMgDAMgBIgBA2QgbAFgNAAQgNAAgLAHQgFADgIAAQgJAAgNgEg");
  this.shape_37.setTransform(-6,6);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f("#333333").s().p("AgmAfQgagJAAgCQAPgFALgKIAWgWQAMgMARgBIAfgBQAKgDALAAIgCA3IgoADQgNABgLAIQgFACgIAAQgKAAgOgEg");
  this.shape_38.setTransform(-5.9,6);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#333333").s().p("AgoAeQgdgKAEgBQARgEAMgMIAYgYQAMgNARABIAeAAIAUgCIgDA5QgcgCgNADQgNACgMAJQgFACgHAAQgLAAgPgGg");
  this.shape_39.setTransform(-5.8,6.1);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f("#333333").s().p("AgqAeQgggMAIABQASgDAPgPIAagZQAOgOAQACQARACALAAIASgBIgEA7QgdgFgNADQgNADgMAKQgFACgGAAQgMAAgRgHg");
  this.shape_40.setTransform(-5.7,6.1);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#333333").s().p("AgrAgQgjgPAMADQATgCARgRQASgSAKgJQAPgPAPAEQAOAEAOAAIAPgBIgEA9QgegJgOAFQgMAEgMAKQgFACgHAAQgMAAgSgHg");
  this.shape_41.setTransform(-5.7,6);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#333333").s().p("AgqAgIgGgDQgagKAHACQAUgDAQgQIAFgDIATgWIADgDQAOgOARACIALACIAQABIAJAAIAGAAQABAFgBAFIgCAzIgFgBIgSgEQgMgCgHACQgGACgHAEIgMAJIgDACIgKABQgMAAgRgHg");
  this.shape_42.setTransform(-5.7,6.1);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#333333").s().p("AgoAhIgHgDIgVgIQAUgDARgQIAFgDIASgWIADgDQANgOARABIAMABIAPABIAJAAIAGAAQADAFgCAFIAAAyIgEABIgSgFQgMgCgHACQgHACgGAEIgOAKIgCABQgFACgGAAQgLAAgQgGg");
  this.shape_43.setTransform(-5.8,6.2);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#333333").s().p("AgmAiIgHgDIgXgIQAUgEARgPIAEgEIASgWIADgCQALgNATgBIALAAIAQABIAJAAIAGAAQAEAFgCAFIABAyIgDACIgSgFQgLgCgIACQgHABgGAEIgPAKIgBACQgFACgHAAQgLAAgPgFg");
  this.shape_44.setTransform(-5.8,6.2);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#333333").s().p("AgkAjIgIgCIgYgJQAUgEAQgOIAFgFQALgOAGgIIACgCQALgMAUgDIALAAIAQAAIAJABIAFAAQAGAEgCAFIABAyIgCAEIgRgGQgLgCgJABQgGABgGAEIgPALIgDACQgEADgJAAQgKAAgNgFg");
  this.shape_45.setTransform(-5.8,6.2);

  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#333333").s().p("AgjAlIgHgDIgbgIQAVgEAQgOIAEgFQALgOAGgIIACgDQAJgLAWgFIAKgBQAHgBAJABIAJABIAGABQAHADgDAFIADAyIgBAGQgIgEgKgDQgKgDgJACQgHABgGADIgOAMIgEACQgFADgJAAQgKAAgMgDg");
  this.shape_46.setTransform(-5.9,6.2);

  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#333333").s().p("AgoAkIgdgIQAYgGARgRIAQgXQALgOAfgHQALgCAPADQAPADgEAFIADA5QgHgEgKgDQgUgFgMAIIgSAOQgGAEgKAAQgMAAgPgFg");
  this.shape_47.setTransform(-5.9,6.2);

  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#333333").s().p("AgoAjIgdgIIANgFQAQgIAMgKIARgWIACgCQAJgNAbgEIAEgBQAIgCALABIAGABQAHABADACQADACgCADIADA1IAAADIgSgGQgRgEgMAFIgCABIgTAOIgCACQgGACgIAAQgLAAgPgFg");
  this.shape_48.setTransform(-5.9,6.2);

  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#333333").s().p("AgoAiIgdgIIANgGQAPgIANgJQALgKAHgLIACgCQAIgNAbgDIAFgBQAHgBAMAAIAGAAQAHABACACQACACgBADIADA1IgBADIgRgFQgRgEgNAEIgCABQgGACgNAKIgBACQgHADgIAAQgLAAgOgFg");
  this.shape_49.setTransform(-5.9,6.2);

  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#333333").s().p("AgoAiIgdgIIAMgIIAdgPQAMgIAHgNIACgCQAIgOAbgBIAFgBIATgBIAGAAQAHAAABACQACADgBADIADA0IgBACIgSgEQgQgDgNADIgCAAQgHACgMAKIgCACQgGADgJAAQgLAAgNgEg");
  this.shape_50.setTransform(-5.9,6.2);

  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f("#333333").s().p("AgoAhIgdgIIAMgIQAPgJAOgGQAMgFAJgOIABgCQAIgPAaAAIAGAAIASgCIAGgBQAIAAAAACQACADgBADIADA0IgCACIgRgDQgQgDgNACIgDAAQgHABgMAKIgBACQgHAEgJAAQgKAAgNgFg");
  this.shape_51.setTransform(-5.9,6.1);

  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#333333").s().p("AgoAhIgdgIIAMgJQAPgKAOgEQANgDAJgQIABgCQAHgQAbADIAGgBIASgCIAGgBQAIgBgBADQABADAAADIADAzIgCACIgSgDQgPgCgNAAIgDABQgIAAgLAKIgCACQgGAEgKAAQgKAAgMgEg");
  this.shape_52.setTransform(-5.9,6.1);

  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#333333").s().p("AgoAhIgdgIIALgKQAPgLAPgCQANgCAKgQIABgCQAHgRAaAEIAHAAIASgDIAGgBQAIgCgCADIABAGIADA0IgDAAIgRgBIgdgDIgDABQgIAAgKAJIgCACQgHAFgKAAQgKAAgLgEg");
  this.shape_53.setTransform(-5.9,6);

  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#333333").s().p("AgoAgIgdgIQAEgFAHgGQAPgLAPgBQAOAAALgTQAHgSAaAGQAGACATgFQAOgEgCADIADA6QgXAAgagEQgMgCgMAMQgGAGgLAAQgJAAgLgEg");
  this.shape_54.setTransform(-5.9,6);

  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f("#333333").s().p("AgpAfIgbgJIAEgDIAIgGQAMgIAMgEIAGgBQAOgBALgSQAJgSAXAGIABAAQAIABARgEIACAAQAKgBgCADIACAqIgCALIgZAAQgKgBgMACIgFAAQgKACgJAIQgGAEgJAAQgJAAgNgFg");
  this.shape_55.setTransform(-6.1,6);

  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#333333").s().p("AgqAeIgZgKIAEgCIAJgEIAYgNIAFgBQAOgFALgPQAMgRAUAEIABAAQAKACAPgDIADgBQAHABgCAEIACApIgFAHQgOgBgLABQgIAAgMAFIgEACQgKADgJAFQgFADgHAAQgLAAgOgGg");
  this.shape_56.setTransform(-6.2,6);

  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f("#333333").s().p("AgqAdIgYgLIAEgBIAJgDQAMgFAMgIIAGgBQAOgIAJgOQAQgQASAEIABAAQAMACANgCIACAAQAFACgBAEIABAoIgIAEQgPgCgJACQgHABgMAIIgEACIgTAIIgIABQgMAAgPgHg");
  this.shape_57.setTransform(-6.3,6);

  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#333333").s().p("AgrAdQgUgKgCgDIAEAAQAFAAAFgBQAMgEAMgKIAFgCQAOgLAJgKQATgQAPACIABAAQAOADALgBIADAAQACAEAAAFIAAAnIgMgBQgPgCgIACQgGACgLAMIgDADQgJAFgKACIgFAAQgMAAgSgIg");
  this.shape_58.setTransform(-6.4,6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape}]},1).to({state:[]},24).wait(2));

  // pole
  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f("#333333").s().p("AgJGIIAAsPIATAAIAAMPg");
  this.shape_59.setTransform(1.1,39.3);

  this.timeline.addTween(cjs.Tween.get(this.shape_59).to({_off:true},84).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,0,15.3,78.5);


(lib.car = function() {
  this.initialize();

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#333333").s().p("AgGA/QgkAAgYgbQgZgaAAgkIAAgkIC2AAIAAAkQAAAkgYAaQgZAbgjAAg");
  this.shape.setTransform(9.2,6.4);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,12.8);


(lib.rails = function() {
  this.initialize();

  // Layer 3
  this.instance = new lib.railnew();
  this.instance.setTransform(68.9,68,1,1,90,0,0,60.4,37.2);

  // Layer 2
  this.instance_1 = new lib.railnew();
  this.instance_1.setTransform(68.9,68.1,1,1,0,0,0,60.4,37.3);

  this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.5,7.6,120.8,120.8);


(lib.cars = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_50 = function() {
    this.gotoAndPlay(0);
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(5853));

  // car
  this.instance = new lib.car();
  this.instance.setTransform(-166.2,-120.6,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-166.3,-120.5,-166.4,-122.1,-166.4,-123.6,-166.4,-140.4,-158.3,-154]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_1 = new lib.car();
  this.instance_1.setTransform(-158.4,-154.1,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[-158.3,-154,-153.8,-161.6,-146.9,-168.2,-140.6,-174.1,-133.5,-178.1]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_2 = new lib.car();
  this.instance_2.setTransform(-133.6,-178.1,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[-133.4,-178.1,-118.5,-186.5,-99.8,-186.5]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_3 = new lib.car();
  this.instance_3.setTransform(-100,-186.1,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_3).to({guide:{path:[-99.9,-186.5,-99.9,-186.5,-99.8,-186.5,-81,-186.5,-65.9,-177.9]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_4 = new lib.car();
  this.instance_4.setTransform(-66.1,-178.1,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[-66,-178,-58.9,-174,-52.7,-168.1,-45.6,-161.4,-41.1,-153.6]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_5 = new lib.car();
  this.instance_5.setTransform(-41.2,-153.7,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_5).to({guide:{path:[-41,-153.6,-33.2,-140.2,-33.2,-123.6,-33.2,-121.6,-33.3,-119.6]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_6 = new lib.car();
  this.instance_6.setTransform(-33.5,-119.7,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_6).to({guide:{path:[-33.4,-119.6,-34.4,-102.8,-44,-89.3]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_7 = new lib.car();
  this.instance_7.setTransform(-44.3,-89,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_7).to({guide:{path:[-44.2,-88.9,-47.8,-83.9,-52.7,-79.3,-60,-72.4,-68.5,-68.1]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_8 = new lib.car();
  this.instance_8.setTransform(-68.7,-68.1,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_8).to({guide:{path:[-68.5,-68,-82.6,-60.8,-99.8,-60.8,-99.8,-60.8,-99.8,-60.8]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_9 = new lib.car();
  this.instance_9.setTransform(-100,-60.9,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_9).to({guide:{path:[-99.8,-60.9,-117.4,-60.9,-131.7,-68.4]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_10 = new lib.car();
  this.instance_10.setTransform(-131.6,-68.3,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_10).to({guide:{path:[-131.5,-68.3,-139.7,-72.6,-146.9,-79.3,-152.1,-84.3,-155.9,-89.7]}},50).to({_off:true},1).wait(5852));

  // car
  this.instance_11 = new lib.car();
  this.instance_11.setTransform(-155.9,-89.6,1,1,0,0,0,9.2,6.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_11).to({guide:{path:[-155.8,-89.5,-165.5,-103.2,-166.3,-120.5]}},50).to({_off:true},1).wait(5852));

  // RAILS
  this.instance_12 = new lib.rails();
  this.instance_12.setTransform(-100.1,-123.3,1,1,31,0,0,68.3,68.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:59.7,y:-123.8},50).wait(5853));

  // RAILS
  this.instance_13 = new lib.rails();
  this.instance_13.setTransform(-100,-123.4,1,1,-1.7,0,0,68.4,68.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:68.3,rotation:31,x:-100.1,y:-123.3},50).wait(5853));

  // RAILS
  this.instance_14 = new lib.rails();
  this.instance_14.setTransform(-99.9,-123.4,1,1,-30.5,0,0,68.4,68.4);

  this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:68.3,rotation:-1.4,x:-100.1,y:-123.2},50).to({_off:true},1).wait(5852));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.4,-194.9,151.1,142.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
