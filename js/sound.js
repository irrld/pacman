function Sound(audioCtx) {
	var oscillator1 = audioCtx.createOscillator();
	var gain1 = audioCtx.createGain();
	oscillator1.sine = 'sine';
	oscillator1.connect(gain1);
	var biquadFilter = audioCtx.createBiquadFilter();
	biquadFilter.frequency.value = 5000;
	gain1.connect(biquadFilter);
	biquadFilter.connect(audioCtx.destination);

	this.eatPellet = function () {
		var conductor = new BandJS();
		conductor.setTimeSignature(2, 2);
		conductor.setTempo(10);
		conductor.setMasterVolume(0.1);

		var rightHand = conductor.createInstrument('triangle', 'oscillators');
		rightHand.note('whole', 'E5');


		var player = conductor.finish();
		player.play();
	}
}
