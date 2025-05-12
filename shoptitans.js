const moduleName = "GameAssembly.dll";
var baseAddress = null;
Process.enumerateModules({
    onMatch: function (module) {
        if (module.name === moduleName) {
            baseAddress = module.base;
            return 'stop';
        }
    },
    onComplete: function () { }
});

var Riposte_Sim_User__RandomItemQuality = baseAddress.add(13014864);
Interceptor.attach(Riposte_Sim_User__RandomItemQuality, {
    onEnter: function (args) {
        let random = Memory.readPointer(args[1].add(0x18));
        let seed = Memory.readS64(random.add(0x08));
        let data = {
            seed: Number(seed),
            p4: args[2].toInt32(),
            p3: args[4].toInt32(),
            p2: args[5].toInt32(),
            p1: args[8].toInt32(),
        }
        send({event: 'RandomItemQuality', data: data})
    },
    onLeave: function (retval) { }
});