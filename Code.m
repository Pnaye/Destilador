% Parámetros del sistema
cantidad_inicial = 1000;  % Cantidad inicial de la mezcla (en ml)
fraccion_agua_inicial = 0.5;  % Fracción inicial de agua en la mezcla
temperatura_inicial = 25;  % Temperatura inicial (en grados Celsius)

% Constantes
constante_destilacion = 0.02;  % Tasa de destilación (en ml/s)
constante_enfriamiento = 0.1;  % Tasa de enfriamiento (en grados Celsius/s)

% Inicialización
cantidad_agua = cantidad_inicial * fraccion_agua_inicial;
cantidad_alcohol = cantidad_inicial - cantidad_agua;
temperatura = temperatura_inicial;

% Tiempo de simulación
tiempo_simulacion = 60;  % segundos

% Inicialización de vectores para almacenar datos
tiempos = 1:tiempo_simulacion;
cantidades_agua = zeros(1, tiempo_simulacion);
cantidades_alcohol = zeros(1, tiempo_simulacion);
temperaturas = zeros(1, tiempo_simulacion);

% Bucle de simulación
for t = 1:tiempo_simulacion
    % Proceso de destilación
    cantidad_agua_destilada = constante_destilacion * cantidad_agua;
    cantidad_agua = cantidad_agua - cantidad_agua_destilada;
    cantidad_alcohol = cantidad_alcohol + cantidad_agua_destilada;

    % Proceso de enfriamiento
    temperatura = temperatura - constante_enfriamiento;

    % Almacenar datos
    cantidades_agua(t) = cantidad_agua;
    cantidades_alcohol(t) = cantidad_alcohol;
    temperaturas(t) = temperatura;
end

% Graficar resultados
figure;

subplot(3, 1, 1);
plot(tiempos, cantidades_agua, 'b-', 'LineWidth', 2);
title('Cantidad de Agua Destilada');
xlabel('Tiempo (s)');
ylabel('Cantidad (ml)');
grid on;

subplot(3, 1, 2);
plot(tiempos, cantidades_alcohol, 'r-', 'LineWidth', 2);
title('Cantidad de Alcohol Destilado');
xlabel('Tiempo (s)');
ylabel('Cantidad (ml)');
grid on;

subplot(3, 1, 3);
plot(tiempos, temperaturas, 'g-', 'LineWidth', 2);
title('Temperatura');
xlabel('Tiempo (s)');
ylabel('Temperatura (C)');
grid on;

% Ajustar diseño de la figura
sgtitle('Simulación de Destilación de Agua y Alcohol');

% Guardar la figura como imagen
saveas(gcf, 'image5.png');

